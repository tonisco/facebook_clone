import Image from "next/image"
import emojiTypes from "./emojiTypes"

const Emoji = ({ likeType, likePost }) => {
	const color = emojiTypes[emojiTypes.findIndex((item) => item.type === likeType)]?.color

	return (
		<>
			{likeType === "like" ? (
				<div
					className="flex items-center flex-1 cursor-pointer"
					onClick={() => likePost("like")}
				>
					<div className="relative overflow-hidden mr-2">
						<img src="/images/reaction/liked.svg" className="h-5 w-5" />
					</div>
					<p className="capitalize text-blue-500">{likeType}</p>
				</div>
			) : (
				<div
					className="flex items-center flex-1 cursor-pointer"
					onClick={() => likePost("like")}
				>
					<div className="relative overflow-hidden  mr-2">
						<img src={`/images/reaction/${likeType}.svg`} className="h-6 w-6" />
					</div>
					<p className={`capitalize ${color && color}`}>{likeType}</p>
				</div>
			)}
		</>
	)
}

export default Emoji
