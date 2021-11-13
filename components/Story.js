import Image from "next/image"

const Story = ({ user }) => {
	return (
		<div className=" h-36 w-24 sm:h-48 sm:w-32 flex-shrink-0 relative rounded-xl overflow-hidden shadow-xl cursor-pointer bg-white">
			<div className="bg-gradient-to-t from-black z-10 w-full h-full absolute opacity-40"></div>
			{user.story && <Image src src={user.story} alt={user.name} layout="fill" />}
			<div className="absolute inset-2">
				<div className=" h6 outline-avatar z-20">
					<Image src src={user.avatar} alt={user.name} layout="fill" />
				</div>
			</div>
			<p className="absolute z-20 text-white p-1 bottom-2">{user.name}</p>
		</div>
	)
}

export default Story
