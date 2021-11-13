import Image from "next/image"
import { EmojiHappyIcon } from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
import { useState } from "react"
import PostForm from "./PostForm"

const CreatePost = () => {
	const { data: session } = useSession()
	const [create, setCreate] = useState(false)

	const createToggler = () => {
		setCreate(!create)
	}

	return (
		<>
			<section className="my-5 p-5 w-full bg-white rounded flex flex-col gap-4 shadow-lg">
				<div className="flex justify-between gap-4 pb-1">
					<figure className="h8 flex-shrink-0">
						<Image src={session.user.image} layout="fill" alt="person" />
						<div className="online-dot"></div>
					</figure>
					<p
						className="cursor-pointer bg-gray-200 rounded-3xl flex-grow w-full text-gray-600 text-sm py-2 px-3"
						onClick={createToggler}
					>
						What's on your mind{" "}
						{session.user.name.split(" ")[session.user.name.split(" ").length - 1]} ?
					</p>
				</div>
				<div className="flex justify-between w-full gap-1 border-t-2 pt-3 border-gray-200">
					<div className="flex items-center sm:gap-1 gap-2 cursor-pointer">
						<div className="relative h-4 sm:h-6 w-4 sm:w-6">
							<Image
								src="/images/video.svg"
								layout="fill"
								alt="video"
								className="fill-current text-blue-600"
							/>
						</div>
						<p className="text-xs sm:text-sm">Live Video</p>
					</div>
					<div
						className="flex items-center sm:gap-1 gap-2 cursor-pointer"
						onClick={setCreate}
					>
						<div className="relative  h-4 sm:h-6 w-4 sm:w-6">
							<Image src="/images/image.svg" layout="fill" alt="person" />
						</div>
						<p className="text-xs sm:text-sm">Photo/video</p>
					</div>
					<div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
						<EmojiHappyIcon className="relative h-4 sm:h-6 w-4 sm:w-6 text-blue-600" />
						<p className="text-xs sm:text-sm">Feeling/activity</p>
					</div>
				</div>
			</section>
			{create && <PostForm createToggler={createToggler} />}
		</>
	)
}

export default CreatePost
