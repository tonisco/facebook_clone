import Image from "next/image"
import { Name } from "../data/UserStory"
const Comment = () => {
	return (
		<section className="p-3">
			<div className="flex items-center gap-3 mb-3">
				<figure className="h8">
					<Image src="/images/new4.jpg" layout="fill" />
					<div className="online-dot"></div>
				</figure>
				<form className="flex-1 text-sm bg-gray-200 py-1 px-2 rounded-xl h-8">
					<input
						type="text"
						placeholder="Write a comment..."
						className="bg-gray-200 w-[80%] h-full text-gray-900 outline-none"
					/>
				</form>
			</div>
			<div className="flex gap-3 items-start">
				<figure className="h8">
					<Image src="/images/new4.jpg" layout="fill" />
					<div className="online-dot"></div>
				</figure>
				<div className="relative max-w-[80%]">
					<div className="flex-grow bg-gray-200 p-2 rounded-md">
						<p className="font-bold">{Name[10]}</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
							perspiciatis aperiam corporis illum ipsam dolorem a maiores commodi sunt
							sint porro architecto dolorum accusantium corrupti explicabo adipisci
							ratione eveniet nihil?
						</p>
						<div className="absolute flex bg-white gap-2 p-0.5 right-1">
							<div className=" flex  rounded-lg">
								<figure className="reaction-icon h-4 w-4">
									<Image src="/images/reaction/care.svg" layout="fill" />
								</figure>
								<figure className="reaction-icon  h-4 w-4 -translate-x-1/4">
									<Image src="/images/reaction/haha.svg" layout="fill" />
								</figure>
							</div>
							<p className="text-xs text-gray-600 -ml-1">4</p>
						</div>
					</div>
					<div className="flex text-sm text-gray-600 font-semibold gap-3 capitalize ml-1">
						<p>like</p>
						<p>reply</p>
						<p>2h</p>
					</div>
					{/* more comment */}
					<div className="flex gap-3 items-start mt-3">
						<figure className="h8">
							<Image src="/images/new4.jpg" layout="fill" />
							<div className="online-dot"></div>
						</figure>
						<div className="relative max-w-[90%]">
							<div className="flex-grow bg-gray-200 p-2 rounded-md">
								<p className="font-bold">{Name[10]}</p>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Cumque, perspiciatis aperiam corporis illum ipsam
								</p>
								<div className="absolute flex bg-white gap-2 p-0.5 right-1">
									<div className=" flex  rounded-lg">
										<figure className="reaction-icon h-4 w-4">
											<Image src="/images/reaction/care.svg" layout="fill" />
										</figure>
										<figure className="reaction-icon  h-4 w-4 -translate-x-1/4">
											<Image src="/images/reaction/haha.svg" layout="fill" />
										</figure>
									</div>
									<p className="text-xs text-gray-600 -ml-1">4</p>
								</div>
							</div>
							<div className="flex text-sm text-gray-600 font-semibold gap-3 capitalize ml-1">
								<p>like</p>
								<p>reply</p>
								<p>2h</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Comment
