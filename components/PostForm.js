import { useSession } from "next-auth/react"
import Image from "next/image"
import { useState, useRef } from "react"
import { db, storage } from "../firebase"
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore"
import { ref, uploadString, getDownloadURL } from "firebase/storage"
import TextareaAutosize from "react-textarea-autosize"

const PostForm = ({ createToggler }) => {
	const { data: session } = useSession()

	const [caption, setCaption] = useState("")
	const [image, setImage] = useState("")
	const [loading, setLoading] = useState(false)

	const imageRef = useRef("")

	const clickImage = () => {
		imageRef.current.click()
	}

	const saveImage = (e) => {
		const reader = new FileReader()
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0])
		}

		reader.onload = (events) => {
			setImage(events.target.result)
		}
	}

	const checkNewLine = (v) => {
		console.log(v.length)
	}

	const uploadPost = async (e) => {
		e.preventDefault()
		if (loading) return

		setLoading(true)

		const post = await addDoc(collection(db, "posts"), {
			name: session.user.name,
			avatar: session.user.image,
			email: session.user.email,
			caption,
			timestamp: serverTimestamp(),
		})

		console.log("Post was saved with:", post.id)

		const imageStorage = ref(storage, `posts/${post.id}/image`)

		await uploadString(imageStorage, image, "data_url").then(async (snapshot) => {
			const downloadURL = await getDownloadURL(imageStorage)

			await updateDoc(doc(db, "posts", post.id), {
				image: downloadURL,
			})
		})

		setLoading(!loading)
		setCaption("")
		setImage("")
		createToggler()
	}

	return (
		<div class="flex items-center justify-center fixed left-0 bottom-0 w-screen bg-gray-300 z-50 bg-opacity-50  h-screen">
			<div class="bg-white rounded-lg w-3/4 md:w-1/2 relative">
				<div className="fill-current text-gray-700 w-6 h-6 absolute right-1 top-1 cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 18 18"
						className="absolute h-6 right-7 top-4"
						onClick={createToggler}
					>
						<path
							d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
							className="cursor-pointer"
						/>
					</svg>
				</div>

				<div class="flex flex-col items-center text-center p-4">
					<div class="text-gray-900 font-bold text-2xl w-full pb-2 border-b border-gray-200 mb-5">
						Create a post
					</div>

					<main class=" flex flex-col items-start w-full px-3 gap-4">
						<div className="links-cover">
							<figure className="h6">
								{session && <Image src={session?.user?.image} layout="fill" />}
							</figure>
							<p className="text-gray-900">{session?.user?.name}</p>
						</div>

						<form className="w-full flex flex-col gap-3" onSubmit={uploadPost}>
							{/* text */}
							<TextareaAutosize
								type="text"
								placeholder={`What is on your mind ${
									session?.user?.name.split(" ")[
										session?.user?.name.split(" ").length - 1
									]
								}`}
								className="w-full outline-none h-10 p-2 rounded-lg"
								onChange={(e) => {
									setCaption(e.target.value)
									checkNewLine(e.target.value)
								}}
							/>
							{/* image input */}
							{image && (
								<img
									src={image}
									className="h-72 self-center"
									onClick={clickImage}
								/>
							)}

							<header
								class={`border-dashed  relative border-2 border-gray-400 py-12 flex flex-col justify-center items-center ${
									image && "hidden"
								}`}
							>
								<p class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
									<span>Drag and drop your</span>&nbsp;
									<span>files anywhere or</span>
								</p>
								<input
									id="image"
									type="file"
									multiple
									className="opacity-0 absolute w-full h-full cursor-pointer"
									accept="image/*"
									onChange={saveImage}
									ref={imageRef}
								/>
								<label
									id="button"
									htmlFor="image"
									class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none cursor-pointer"
								>
									Upload a file
								</label>
							</header>
							<button
								class={`${
									loading ? "bg-blue-700" : "bg-blue-500"
								} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
							>
								Post
							</button>
						</form>
					</main>
				</div>
			</div>
		</div>
	)
}

export default PostForm
