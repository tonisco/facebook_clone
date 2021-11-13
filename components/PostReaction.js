import { useEffect, useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { collection, onSnapshot, doc, setDoc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase"
import Emoji from "./Emoji"
import emojiTypes from "./emojiTypes"

const PostReaction = ({ post }) => {
	const { data: session } = useSession()
	const [allLikes, setAllLikes] = useState([])
	const [allLikesReact, setAllLikesReact] = useState([])
	const [liked, setLiked] = useState(false)
	const [likeType, setLikeType] = useState("")
	const [commentLength, setCommentLength] = useState(0)
	const [react, setReact] = useState(false)

	const likePost = async (type) => {
		if (liked) await deleteDoc(doc(db, "posts", post.id, "likes", session.user.uid))
		else {
			if (react) reactToggler()
			await setDoc(doc(db, "posts", post.id, "likes", session.user.uid), {
				type: type,
				email: session.user.email,
			})
		}
	}

	const reactToggler = () => setReact(!react)

	let timer

	const mouseDown = () => {
		timer = window.setTimeout(reactToggler, 500)
	}

	const mouseup = () => {
		window.setTimeout(() => window.clearTimeout(timer))
	}

	useEffect(
		() =>
			onSnapshot(collection(db, "posts", post.id, "comment"), (snapshot) => {
				setCommentLength(snapshot.docs.length)
			}),
		[db, post.id]
	)

	useEffect(
		() =>
			onSnapshot(collection(db, "posts", post.id, "likes"), (snapshot) => {
				setAllLikes(snapshot.docs)

				setAllLikesReact((prev) => {
					let all = []
					snapshot.docs?.map((likes) => {
						let inLike = all.includes(likes.data().type)
						if (!inLike) {
							all.push(likes.data().type)
						}
					})
					return all
				})

				const isLiked = snapshot.docs?.findIndex((like) => like.id === session?.user.uid)
				setLikeType(String(snapshot?.docs[isLiked]?.data().type))
				setLiked(isLiked !== -1)
			}),
		[db, post.id]
	)

	return (
		<>
			<div className="flex w-full content-between py-3 px-3">
				<div className="flex items-center w-auto mr-auto">
					<div className="relative flex items-center">
						{allLikesReact.map((like, i) => (
							<figure
								key={i}
								className={`reaction-icon h-4 w-4 sm:h-6 sm:w-6 translate${i}`}
							>
								<Image
									src={`/images/reaction/${like}.svg`}
									alt="reaction"
									layout="fill"
								/>
							</figure>
						))}
					</div>
					<p className=" text-gray-500 ">{allLikes.length > 0 && allLikes.length}</p>
				</div>
				<div className="text-sm text-gray-500 flex gap-3">
					<p>
						{commentLength} comment{commentLength > 0 && "s"}
					</p>
					<p>0 shares</p>
				</div>
			</div>
			<div className={`border-t-2 ${session && "border-b-2"} w-full p-2`}>
				{session && (
					<div className="flex content-between w-[70%]  mx-auto relative">
						{react && (
							<div className="">
								<div
									className="fixed h-screen w-screen top-0 left-0 z-40 "
									onClick={reactToggler}
								></div>
								<div className="bg-white absolute -top-12 -left-20 z-50 w-full flex items-center gap-3">
									{emojiTypes.map((emoji) => (
										<figure
											className={`reaction-icon h-10 w-10 sm:h-6 sm:w-6 cursor-pointer`}
											onClick={() => likePost(emoji.type)}
										>
											<Image
												src={`/images/reaction/${emoji.type}.svg`}
												alt="reaction"
												layout="fill"
											/>
										</figure>
									))}
								</div>
							</div>
						)}
						{liked ? (
							<Emoji likeType={likeType} likePost={likePost} />
						) : (
							<div
								className="flex items-center flex-1 cursor-pointer"
								onClick={() => likePost("like")}
								onMouseDown={mouseDown}
								onMouseUp={mouseup}
							>
								<div className="relative overflow-hidden h-8 w-8">
									<img src="/images/icon/likes.svg" layout="fill" />
								</div>
								<p>Like</p>
							</div>
						)}
						<div className="flex items-center flex-1 cursor-pointer">
							<div className="relative overflow-hidden h-8 w-8">
								<Image src="/images/icon/comment.svg" layout="fill" />
							</div>
							<p>Comment</p>
						</div>
						<div className="flex items-center  cursor-pointer">
							<div className="relative overflow-hidden h-8 w-8">
								<Image src="/images/icon/share.svg" layout="fill" />
							</div>
							<p>Share</p>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default PostReaction
