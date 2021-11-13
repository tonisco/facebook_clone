import Image from "next/image"
const PostBody = ({ post }) => {
	return (
		<>
			<p className="px-4">{post.data().caption}</p>
			<img src={post.data().image} alt="" className="w-full h-auto mt-2" />
		</>
	)
}

export default PostBody
