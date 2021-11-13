import Image from "next/image"
import { Name } from "../data/UserStory"
import { useSession } from "next-auth/react"
import {
	addDoc,
	serverTimestamp,
	onSnapshot,
	collection,
	query,
	orderBy,
	updateDoc,
	doc,
} from "firebase/firestore"
import { db } from "../firebase"
import { useState, useEffect } from "react"
import Comment from "./Comment"

const Comments = ({ post }) => {
	const { data: session } = useSession()

	const [comment, setComment] = useState("")
	const [comments, setComments] = useState([])

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, "posts", post.id, "comment"), orderBy("timestamp", "desc")),
				(snapshot) => {
					setComments(snapshot.docs)
				}
			),
		[db, post.id]
	)

	const sendComment = async (e) => {
		e.preventDefault()
		await addDoc(collection(db, "posts", post.id, "comment"), {
			timestamp: serverTimestamp(),
			comment,
			name: session.user.name,
			avatar: session.user.image,
		})

		setComment("")
	}

	return (
		<section className="m-3">
			{session && (
				<div className="flex items-center gap-3 mb-3">
					<figure className="h8">
						<Image src={session.user.image} layout="fill" />
						<div className="online-dot"></div>
					</figure>
					<form
						className="flex-1 text-sm bg-gray-200 py-1 px-2 rounded-xl h-8"
						onSubmit={sendComment}
					>
						<input
							type="text"
							placeholder="Write a comment..."
							className="bg-gray-200 w-[80%] h-full text-gray-900 outline-none pl-2"
							onChange={(e) => setComment(e.target.value)}
							value={comment}
						/>
					</form>
				</div>
			)}
			{comments?.map((comm) => (
				<Comment comm={comm} key={comm.id} />
			))}
		</section>
	)
}

export default Comments
