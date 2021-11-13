import { getProviders, signIn, useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/router"
const signin = ({ providers }) => {
	const { data: session } = useSession()

	const router = useRouter()

	useEffect(() => {
		if (session) router.push("/")
	}, [session])

	return (
		<main className="bg-gray-200 h-screen w-screen flex justify-center items-center">
			<div className="bg-white p-5 rounded-lg shadow-lg text-center text-gray-900">
				<h1 className="text-5xl text-blue-600">Peoplebook</h1>
				<h3 className="lg m-3">Connect with your friends</h3>
				{Object.values(providers).map((provider) => (
					<div className="mt-3 bg-blue-400 rounded-lg p-1" key={provider.name}>
						<button onClick={() => signIn(provider.id)}>
							Sign in with {provider.name}
						</button>
					</div>
				))}
			</div>
		</main>
	)
}

export default signin

export async function getServerSideProps() {
	const providers = await getProviders()

	return { props: { providers } }
}
