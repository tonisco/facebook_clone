import Image from "next/image"
import { Name } from "../data/UserStory"

const Links = () => {
	return (
		<div className="flex-1 hidden lg:block">
			<div className="fixed">
				<div className="flex flex-col gap-3 py-3 px-4">
					<div className="flex items-center gap-2 font-semibold">
						<figure className="h8">
							<Image src="/images/new4.jpg" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">{Name[11]}</p>
					</div>
					<div className="flex items-center gap-2 font-semibold">
						<figure className="h8">
							<Image src="/images/icon/fb-friends.png" layout="fill" />
						</figure>
						<p className="text-gray-900">Friends</p>
					</div>
					<div className="flex items-center gap-2 font-semibold">
						<figure className="h8">
							<Image src="/images/icon/fb-jobs.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Jobs</p>
					</div>
					<div className="flex items-center gap-2 font-semibold">
						<figure className="h8">
							<Image src="/images/icon/fb-groups.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Groups</p>
					</div>
					<div className="flex items-center gap-2 font-semibold">
						<figure className="h8">
							<Image src="/images/icon/fb-marketplace.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Market Place</p>
					</div>
					<div className="flex items-center gap-2 font-semibold">
						<figure className="h8">
							<Image src="/images/icon/fb-watch.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Watch</p>
					</div>
					<div className="flex items-center gap-2 font-semibold">
						<figure className="h8">
							<Image src="/images/icon/fb-memories.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Memories</p>
					</div>
					<div className="flex items-center gap-2 font-semibold">
						<figure className="h8">
							<Image src="/images/icon/fb-saved.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Saved</p>
					</div>
					<div className="flex items-center gap-2 font-semibold">
						<figure className="h8">
							<Image src="/images/icon/fb-pages.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Pages</p>
					</div>
					<div className="flex items-center gap-2 font-semibold">
						<figure className="h8">
							<Image src="/images/icon/fb-event.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Events</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Links
