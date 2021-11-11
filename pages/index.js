import Head from "next/head"
import Header from "../components/Header"
import Stories from "../components/Stories"
import StoryCreate from "../components/StoryCreate"
import Posts from "../components/Posts"
import Links from "../components/Links"
import Ads from "../components/Ads"

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>People Book</title>
				<link rel="icon" href="/favicon.ico"></link>
				<meta name="description" content="Connect with your friends" />
			</Head>
			<Header />
			<div className="bg-gray-200 flex content-between pt-20">
				<Links />
				<div className=" flex items-center flex-col w-full sm:w-[70vw] md:w-[50vw] lg:w-[40vw] mx-auto">
					<Stories />
					<StoryCreate />
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
