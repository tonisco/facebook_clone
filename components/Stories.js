import Image from "next/image"
import { PlusCircleIcon } from "@heroicons/react/solid"
import { Name } from "../data/UserStory"
import { useState, useEffect, useRef } from "react"
import Story from "./Story"
import { useSession } from "next-auth/react"
import {
	addDoc,
	collection,
	serverTimestamp,
	updateDoc,
	doc,
	onSnapshot,
	query,
	orderBy,
	deleteDoc,
} from "firebase/firestore"
import { ref, uploadString, getDownloadURL, deleteObject } from "firebase/storage"
import { storage, db } from "../firebase"

const Stories = () => {
	const [users, setUsers] = useState([])
	const [createStory, setCreateStory] = useState(false)
	const [loading, setLoading] = useState(false)
	const [storyImage, setStoryImage] = useState("")
	const [imageType, setImageType] = useState("")
	const scrollRef = useRef("")
	const imageRef = useRef("")

	const clickImage = () => {
		imageRef.current.click()
	}

	const { data: session } = useSession()

	const storyToggler = () => setCreateStory(!createStory)

	const saveImage = (e) => {
		setImageType(e.target.value.split(".")[e.target.value.split(".").length - 1])
		const fileReader = new FileReader()
		if (e.target.files[0]) {
			fileReader.readAsDataURL(e.target.files[0])
		}
		fileReader.onload = (event) => {
			setStoryImage(event.target.result)
		}
	}

	const sendStory = async (e) => {
		e.preventDefault()
		if (loading) return
		setLoading(true)
		const story = await addDoc(collection(db, "story"), {
			name: session.user.name,
			avatar: session.user.image,
			timestamp: serverTimestamp(),
		})

		console.log(story.id)

		const imageRef = ref(storage, `story/${new Date().getTime()}/image`)

		await uploadString(imageRef, storyImage, "data_url").then(async (snapshot) => {
			const downloadURL = await getDownloadURL(imageRef)
			console.log(snapshot.ref.fullPath)
			console.log(downloadURL)

			await updateDoc(doc(db, "story", story.id), {
				story: downloadURL,
				imagePath: snapshot.ref.fullPath,
				imageType,
			})
		})

		setLoading(false)
		setCreateStory(false)
		setStoryImage("")
		setImageType("")
	}

	useEffect(
		() =>
			onSnapshot(query(collection(db, "story"), orderBy("timestamp", "desc")), (snapshot) => {
				const alldata = []
				snapshot.docs.map((data, i) => {
					let datas = data.data()
					alldata.push({ id: snapshot.docs[i].id, ...datas })
				})

				const allUsers = [...new Array(13)].map((_, i) => ({
					name: Name[i],
					avatar: `/images/avatar/${i + 1}.jpg`,
					story: `/images/story/${i + 1}.jpg`,
				}))
				setUsers([...alldata, ...allUsers])
			}),
		[]
	)

	useEffect(() => {
		users.map(async (user) => {
			if (user.id && user.timestamp) {
				const expired = 60 * 60 * 24
				const expiredTime = expired + user.timestamp.seconds
				const difference = expiredTime - user.timestamp.seconds
				if (difference <= 1) {
					const imageRef = ref(storage, `${user.imagePath}.${user.imageType}`)
					await deleteObject(imageRef)
						.then((value) => {
							console.log("done")
							console.log(value)
						})
						.catch((err) => console.error(err))
					await deleteDoc(doc(db, "story", user.id))
				}
			}
		})
	}, [users])

	let mouseDown = false
	let startX, scrollLeft

	const startDragging = (e) => {
		e.preventDefault()
		mouseDown = true
		startX = e.pageX - scrollRef.current.offsetLeft
		scrollLeft = scrollRef.current.scrollLeft
	}

	let stopDragging = function (event) {
		mouseDown = false
	}

	const slider = (e) => {
		e.preventDefault()
		if (!mouseDown) {
			return
		}
		const x = e.pageX - scrollRef.current.offsetLeft
		const scroll = x - startX
		scrollRef.current.scrollLeft = scrollLeft - scroll
	}

	return (
		<div
			className="flex gap-4 pt-0 md:pt-5 mb-2 md:mb-5 w-full overflow-x-scroll scrollbar scrollbar-hide cursor-auto max-w-2xl px-1 sm:mx-0"
			ref={scrollRef}
			onMouseMove={slider}
			onMouseDown={startDragging}
			onMouseUp={stopDragging}
			onMouseLeave={stopDragging}
		>
			{session && (
				<div
					className=" relative h-36 w-24 sm:h-48 sm:w-32 flex-shrink-0 flex flex-col justify-between rounded-xl overflow-hidden shadow-xl cursor-pointer bg-white"
					onClick={storyToggler}
				>
					<div className="relative h-36">
						<Image src src={session.user.image} alt={session.user.name} layout="fill" />
					</div>
					<div className="absolute bottom-5 left-9 sm:bottom-7 sm:left-11 bg-white rounded-full">
						<PlusCircleIcon className="h-6 w-6 sm:h-10 sm:w-10 text-blue-600" />
					</div>
					<p className="text-sm text-gray-900 p-1 bottom-2 text-center pb-2 justify-self-end">
						Create Story
					</p>
				</div>
			)}
			{users.map((user, i) => (
				<Story user={user} key={i} />
			))}
			{createStory && (
				<div class="flex items-center justify-center fixed left-0 bottom-0 w-screen bg-gray-300 z-50 bg-opacity-50  h-screen">
					<div class="bg-white rounded-lg w-3/4 md:w-1/2 relative">
						<div className="fill-current text-gray-700 w-6 h-6 absolute right-1 top-1 cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 18 18"
								className="absolute h-6 right-7 top-4"
								onClick={storyToggler}
							>
								<path
									d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
									className="cursor-pointer"
								/>
							</svg>
						</div>

						<div class="flex flex-col items-center text-center p-4">
							<div class="text-gray-900 font-bold text-2xl w-full pb-2 border-b border-gray-200 mb-5">
								Create a story
							</div>
							{/* story popup */}
							<main class=" flex flex-col items-start w-full px-3 gap-4">
								<div className="links-cover">
									<figure className="h6">
										{session && (
											<Image src={session?.user?.image} layout="fill" />
										)}
									</figure>
									<p className="text-gray-900">{session?.user?.name}</p>
								</div>
								<p className="text-red-600 text-center text-sm font-semibold self-center">
									All images disappear after 24hrs
								</p>
								<form className="w-full flex flex-col gap-3" onSubmit={sendStory}>
									{/* image input */}
									{storyImage && (
										<img
											src={storyImage}
											className="h-72 self-center"
											onClick={clickImage}
										/>
									)}

									<header
										class={`border-dashed relative border-2 border-gray-400 py-12 flex flex-col justify-center items-center ${
											storyImage && "hidden"
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
											class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
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
			)}
		</div>
	)
}

export default Stories
