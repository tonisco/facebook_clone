import Image from "next/image"
import { useSession } from "next-auth/react"

const Links = () => {
	const { data: session } = useSession()

	return (
		<div className="flex-1 hidden lg:block">
			<div className="fixed">
				<div className="flex flex-col gap-3 py-3 px-4">
					{session && (
						<div className="links-cover">
							<figure className="h8">
								{session && <Image src={session?.user?.image} layout="fill" />}
							</figure>
							<p className="text-gray-900">{session?.user?.name}</p>
						</div>
					)}
					<div className="links-cover">
						<figure className="h8">
							<Image src="/images/icon/fb-friends.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Friends</p>
					</div>
					<div className="links-cover">
						<figure className="h8">
							<Image src="/images/icon/fb-jobs.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Jobs</p>
					</div>
					<div className="links-cover">
						<figure className="h8">
							<Image src="/images/icon/fb-groups.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Groups</p>
					</div>
					<div className="links-cover">
						<figure className="h8">
							<Image src="/images/icon/fb-marketplace.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Market Place</p>
					</div>
					<div className="links-cover">
						<figure className="h8">
							<Image src="/images/icon/fb-watch.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Watch</p>
					</div>
					<div className="links-cover">
						<figure className="h8">
							<Image src="/images/icon/fb-memories.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Memories</p>
					</div>
					<div className="links-cover">
						<figure className="h8">
							<Image src="/images/icon/fb-saved.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Saved</p>
					</div>
					<div className="links-cover">
						<figure className="h8">
							<Image src="/images/icon/fb-pages.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Pages</p>
					</div>
					<div className="links-cover">
						<figure className="h8">
							<Image src="/images/icon/fb-events.png" layout="fill" />
						</figure>
						<p className="text-sm text-gray-900">Events</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Links
