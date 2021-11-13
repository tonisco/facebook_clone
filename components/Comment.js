import Image from "next/image"
import Moment from "react-moment"
import { useSession } from "next-auth/react"
const Comment = ({ comm }) => {
	const { data: session } = useSession()

	return (
		<div className="flex gap-3 items-start">
			<figure className="h8">
				<Image src={comm.data().avatar} layout="fill" />
				{session?.user.image === comm.data().avatar && <div className="online-dot"></div>}
			</figure>
			<div className="relative max-w-[80%]">
				<div className="flex-grow bg-gray-200 py-2 px-4 rounded-md mb-3">
					<p className="font-semibold capitalize">{comm.data().name}</p>
					<p className="text-sm">{comm.data().comment}</p>
					<div className="self-start">
						<Moment fromNow className="text-xs">
							{comm.data()?.timestamp?.toDate()}
						</Moment>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Comment
