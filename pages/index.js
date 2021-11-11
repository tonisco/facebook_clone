import Head from "next/head"
import Header from "../components/Header"
import Stories from "../components/Stories"
import StoryCreate from "../components/StoryCreate"
import Posts from "../components/Posts"

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>People Book</title>
				<link rel="icon" href="/favicon.ico"></link>
				{/* <meta>Connect with your friends</meta> */}
			</Head>
			<Header>
				<div className="bg-gray-200 flex items-center flex-col">
					<Stories />
					<StoryCreate />
					<Posts />
				</div>
			</Header>
		</div>
	)
}

// body = #F0F2F5
//icon-active = #1877f2
// icon-center = #65676b
// text-color =#050505
