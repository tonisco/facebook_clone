import Image from "next/image"
import { GlobeIcon } from "@heroicons/react/outline"
import { useSession } from "next-auth/react"
import Moment from "react-moment"

const PostHeader = ({ post }) => {
	const { data: session } = useSession()
	return (
		<header className="flex items-center p-4 gap-3 w-full">
			<figure className="relative h-9 w-9 rounded-full overflow-hidden">
				<Image src={post.data().avatar} layout="fill" />
				{session?.user.email === post.data().email && <div className="online-dot"></div>}
			</figure>
			<div>
				<p className="text-sm font-bold capitalize">{post.data().name}</p>
				<div className="flex text-gray-500 gap-1">
					<Moment className="text-xs " fromNow>
						{post.data().timestamp?.toDate()}
					</Moment>
					<GlobeIcon className="h-4 w-4" />
				</div>
			</div>
		</header>
	)
}

export default PostHeader
