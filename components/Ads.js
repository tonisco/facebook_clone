import Image from "next/image"
import { Name } from "../data/UserStory"
import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from "@heroicons/react/outline"
import { useSession } from "next-auth/react"

const Ads = () => {
	const { data: session } = useSession()
	return (
		<div className="flex-1 max-w-[16rem] lg:max-w-none mx-5 my-5 hidden md:block justify-end">
			<div className="fixed overflow-y-scroll scrollbar h-screen">
				{session && (
					<>
						<section className="shadow-lg bg-white rounded-lg p-2 text-gray-900 relative cursor-pointer">
							<div className=" flex items-center">
								<figure className="h8">
									<Image src="/images/icon/fb-birthday.png" layout="fill" />
								</figure>
								<h3>Birthdays</h3>
							</div>
							<p>
								<span className="font-semibold">
									{Name[Math.floor(Math.random() * Name.length)]}
								</span>{" "}
								and 3 others have birthday today
							</p>
							<span className="font-semibold absolute right-7 top-2 text-gray-900 cursor-pointer">
								X
							</span>
						</section>
						<div className="border-b border-gray-300 rounded-lg my-4"></div>
					</>
				)}

				<section className="p-2">
					<h3 className="font-semibold text-gray-900 mb-2">Sponsored</h3>
					<div className="flex gap-3 mb-3 items-center cursor-pointer">
						<figure className="relative h-24 w-20 rounded-lg overflow-hidden">
							<Image src="/images/fb-ad1.jpg" layout="fill" />
						</figure>
						<p className="text-sm">Prepare for your interviews</p>
					</div>
					<div className="flex gap-3 items-center cursor-pointer">
						<figure className="relative h-24 w-20 rounded-lg overflow-hidden">
							<Image src="/images/fb-ad2.jpg" layout="fill" />
						</figure>
						<p className="text-sm">Trade successfully</p>
					</div>
				</section>

				{session && (
					<>
						<div className="border-b border-gray-300 rounded-lg my-4"></div>
						<section className="p-3">
							<div className=" flex items-center justify-between">
								<h3 className="text-gray-900 font-semibold">Contacts</h3>
								<div className="flex gap-3">
									<VideoCameraIcon className="h-4" />
									<SearchIcon className="h-4" />
									<DotsHorizontalIcon className="h-4" />
								</div>
							</div>
							{Name.map((na, i) => (
								<div
									className="flex items-center gap-3 my-3 cursor-pointer"
									key={i}
								>
									<figure className="h8">
										<Image src={`/images/avatar/${i + 1}.jpg`} layout="fill" />
										<div className="online-dot"></div>
									</figure>
									<p>{na}</p>
								</div>
							))}
						</section>
					</>
				)}
			</div>
		</div>
	)
}

export default Ads
