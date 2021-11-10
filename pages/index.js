import Head from "next/head"
import Header from "../components/Header"
import Stories from "../components/Stories"

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>People Book</title>
				<link rel="icon" href="/favicon.ico"></link>
				{/* <meta>Connect with your friends</meta> */}
			</Head>
			<Header>
				<div className="bg-gray-200 flex justify-center">
					<Stories />
				</div>
			</Header>
		</div>
	)
}

// body = #F0F2F5
//icon-active = #1877f2
// icon-center = #65676b
// text-color =#050505
