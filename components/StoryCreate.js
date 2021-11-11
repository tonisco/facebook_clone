import Image from "next/image"
import { EmojiHappyIcon } from "@heroicons/react/solid"
const StoryCreate = () => {
	return (
		<section className="my-5 p-5 w-full md:w-[50vw] bg-white rounded flex flex-col gap-4 shadow-lg">
			<div className="flex justify-between gap-4 pb-1">
				<figure className="h8">
					<Image src="/images/new4.jpg" layout="fill" alt="person" />
				</figure>
				<p className="cursor-pointer bg-gray-200 rounded-3xl flex-grow w-full text-gray-600 text-sm py-2 px-3">
					What's on your mind shang ?
				</p>
			</div>
			<div className="flex justify-between w-full gap-1 border-t-2 pt-3 border-gray-200">
				<div className="flex items-center gap-2">
					<div className="relative h-8 w-8">
						<Image
							src="/images/video.svg"
							layout="fill"
							alt="video"
							className="fill-current text-blue-600"
						/>
					</div>
					<p className="text-sm">Live Video</p>
				</div>
				<div className="flex items-center gap-2 cursor-pointer">
					<div className="relative  h-8 w-8">
						<Image src="/images/image.svg" layout="fill" alt="person" />
					</div>
					<p className="text-sm">Photo/video</p>
				</div>
				<div className="flex items-center gap-2">
					<EmojiHappyIcon className="relative h-8 w-8 text-blue-600" />
					<p className="text-sm">Feeling/activity</p>
				</div>
			</div>
		</section>
	)
}

export default StoryCreate
