import Head from "next/head"
import Header from "../components/Header"
import Stories from "../components/Stories"
import CreatePost from "../components/CreatePost"
import Posts from "../components/Posts"
import Links from "../components/Links"
import Ads from "../components/Ads"
import { useSession } from "next-auth/react"

export default function Home() {
	const { data: session } = useSession()

	return (
		<div className="">
			<Head>
				<title>People Book</title>
				<link rel="icon" href="/favicon.ico"></link>
				<meta name="description" content="Connect with your friends" />
			</Head>
			<Header />
			<div className="bg-gray-200 flex content-between pt-20 min-h-screen">
				<Links />
				<div className=" flex items-center flex-col w-full sm:w-[70vw] md:w-[50vw] lg:w-[40vw] mx-auto">
					<Stories />
					{session && <CreatePost />}
					<Posts />
				</div>
				<Ads />
			</div>
		</div>
	)
}

// body = #F0F2F5
//icon-active = #1877f2
// icon-center = #65676b
// text-color =#050505
