import Image from "next/image"
import { PlusCircleIcon } from "@heroicons/react/solid"
import { Name } from "../data/UserStory"
import { useState, useEffect } from "react"
import Story from "./Story"

const Stories = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const allUsers = [...new Array(13)].map((_, i) => ({
			name: Name[i],
			avatar: `/images/avatar/${i + 1}.jpg`,
			story: `/images/story/${i + 1}.jpg`,
			id: i,
		}))
		setUsers(allUsers)
	}, [])

	return (
		<div className="flex gap-4 py-5 w-full overflow-x-scroll max-w-5xl scrollbar-thin scrollbar-thumb-gray-900 ">
			{users.length > 0 && (
				<div className=" relative h-48 w-32 flex-shrink-0 flex flex-col justify-between rounded-xl overflow-hidden shadow-xl cursor-pointer bg-white">
					<div className="relative h-36">
						<Image src src={users[4].avatar} alt={users[4].name} layout="fill" />
					</div>
					<div className="absolute bottom-8 left-12 bg-white rounded-full">
						<PlusCircleIcon className="h-8 w-8 text-blue-600" />
					</div>
					<p className="text-sm text-gray-900 p-1 bottom-2 text-center pb-2 justify-self-end">
						Create Story
					</p>
				</div>
			)}
			{users.map((user) => (
				<Story user={user} key={user.id} />
			))}
		</div>
	)
}

export default Stories