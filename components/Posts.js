import Image from "next/image"
import { GlobeIcon } from "@heroicons/react/outline"
import { Name } from "../data/UserStory"
import Comment from "./Comment"

const Posts = () => {
	return (
		<div className="">
			<main className="my-3 bg-white w-full  shadow-lg text-gray-900 mb-8 pb-3">
				<header className="flex items-center p-4 gap-3">
					<figure className="relative h-9 w-9 rounded-full overflow-hidden">
						<Image src="/images/new4.jpg" layout="fill" />
					</figure>
					<div>
						<p className="text-sm font-bold">{Name[11]}</p>
						<div className="flex text-gray-500 gap-1">
							<p className="text-xs ">4hr</p>
							<GlobeIcon className="h-4 w-4" />
						</div>
					</div>
				</header>
				<p className="px-4">Important Message for all</p>
				<img src="/images/avatar/2.jpg" alt="" className="w-full h-auto mt-2" />
				<div className="flex w-full content-between py-3 px-3">
					<div className="flex items-center w-auto mr-auto">
						<div className="relative flex">
							<figure className="reaction-icon h-4 w-4 sm:h-6 sm:w-6 ">
								<Image
									src="/images/reaction/like.svg"
									alt="reaction"
									layout="fill"
								/>
							</figure>
							<figure className="reaction-icon h-4 w-4 sm:h-6 sm:w-6 -translate-x-1/4">
								<Image
									src="/images/reaction/haha.svg"
									alt="reaction"
									layout="fill"
								/>
							</figure>
							<figure className="reaction-icon h-4 w-4 sm:h-6 sm:w-6 -translate-x-1/2">
								<Image
									src="/images/reaction/love.svg"
									alt="reaction"
									layout="fill"
								/>
							</figure>
							<figure className="reaction-icon h-4 w-4 sm:h-6 sm:w-6 -translate-x-3/4">
								<Image
									src="/images/reaction/sad.svg"
									alt="reaction"
									layout="fill"
								/>
							</figure>
						</div>
						<p className=" text-gray-500 text-sm -ml-2">23</p>
					</div>
					<div className="text-sm text-gray-500 flex gap-3">
						<p>4 Comments</p>
						<p>3 Shares</p>
					</div>
				</div>
				<div className="border-t-2 border-b-2 w-full p-2">
					<div className="flex content-between w-[70%]  mx-auto">
						<div className="flex items-center flex-1 cursor-pointer">
							<div className="relative overflow-hidden h-8 w-8">
								<Image src="/images/icon/likes.svg" layout="fill" />
							</div>
							<p>Like</p>
						</div>
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
				</div>
				<Comment />
			</main>
			{/* new post */}
			<main className="w-full my-3 bg-white w-full  shadow-lg text-gray-900 mb-8 pb-3">
				<header className="flex items-center p-4 gap-3">
					<figure className="relative h-9 w-9 rounded-full overflow-hidden">
						<Image src="/images/new4.jpg" layout="fill" />
					</figure>
					<div>
						<p className="text-sm font-bold">{Name[11]}</p>
						<div className="flex text-gray-500 gap-1">
							<p className="text-xs ">4hr</p>
							<GlobeIcon className="h-4 w-4" />
						</div>
					</div>
				</header>
				<p className="px-4">Important Message for all</p>
				<img src="/images/avatar/8.jpg" alt="" className="w-full h-auto mt-2" />
				<div className="flex w-full content-between py-3 px-3">
					<div className="flex items-center w-auto mr-auto">
						<div className="relative flex">
							<figure className="reaction-icon h-6 w-6 ">
								<Image
									src="/images/reaction/like.svg"
									alt="reaction"
									layout="fill"
								/>
							</figure>
							<figure className="reaction-icon h-6 w-6 -translate-x-1/4">
								<Image
									src="/images/reaction/haha.svg"
									alt="reaction"
									layout="fill"
								/>
							</figure>
							<figure className="reaction-icon h-6 w-6 -translate-x-1/2">
								<Image
									src="/images/reaction/love.svg"
									alt="reaction"
									layout="fill"
								/>
							</figure>
							<figure className="reaction-icon h-6 w-6 -translate-x-3/4">
								<Image
									src="/images/reaction/sad.svg"
									alt="reaction"
									layout="fill"
								/>
							</figure>
						</div>
						<p className=" text-gray-500 text-sm -ml-2">23</p>
					</div>
					<div className="text-sm text-gray-500 flex gap-3">
						<p>4 Comments</p>
						<p>3 Shares</p>
					</div>
				</div>
				<div className="border-t-2 border-b-2 w-full p-2">
					<div className="flex content-between w-[70%]  mx-auto">
						<div className="flex items-center flex-1 cursor-pointer">
							<div className="relative overflow-hidden h-8 w-8">
								<Image src="/images/icon/likes.svg" layout="fill" />
							</div>
							<p>Like</p>
						</div>
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
				</div>
				<Comment />
			</main>
		</div>
	)
}

export default Posts
