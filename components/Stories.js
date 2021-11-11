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
		<div className="flex gap-4 py-5 w-full overflow-x-scroll max-w-2xl scrollbar-thin scrollbar-thumb-gray-900 px-1 sm:mx-0">
			{users.length > 0 && (
				<div className=" relative h-36 w-24 sm:h-48 sm:w-32 flex-shrink-0 flex flex-col justify-between rounded-xl overflow-hidden shadow-xl cursor-pointer bg-white">
					<div className="relative h-36">
						<Image src src={users[4].avatar} alt={users[4].name} layout="fill" />
					</div>
					<div className="absolute bottom-5 left-9 sm:bottom-7 sm:left-11 bg-white rounded-full">
						<PlusCircleIcon className="h-6 w-6 sm:h-10 sm:w-10 text-blue-600" />
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
