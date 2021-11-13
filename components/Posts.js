import Image from "next/image"
import Comments from "./Comments"
import PostHeader from "./PostHeader"
import PostBody from "./PostBody"
import PostReaction from "./PostReaction"
import { useEffect, useState } from "react"
import { onSnapshot, collection, query, orderBy } from "firebase/firestore"
import { db } from "../firebase"

const Posts = () => {
	const [posts, setPosts] = useState([])

	useEffect(
		() =>
			onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), (snapshot) => {
				setPosts(snapshot.docs)
			}),
		[db]
	)

	return (
		<>
			{posts?.map((post) => (
				<main
					key={post.id}
					className="my-3 bg-white w-full  shadow-lg text-gray-900 mb-8 pb-3 rounded-lg"
				>
					<PostHeader post={post} />
					<PostBody post={post} />
					<PostReaction post={post} />
					<Comments post={post} />
				</main>
			))}
		</>
	)
}

export default Posts
