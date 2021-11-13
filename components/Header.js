import Link from "next/link"
import {
	SearchIcon,
	BellIcon,
	InboxIcon,
	FilmIcon,
	HomeIcon,
	MenuIcon,
	LoginIcon,
} from "@heroicons/react/outline"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"

const Header = () => {
	const { data: session } = useSession()

	return (
		<div className="fixed w-full z-40">
			<header className="bg-white shadow-lg w-full">
				<div className="flex justify-between w-full max-w-7xl p-3 mx-auto">
					<div className=" flex justify-between items-center gap-4 sm:gap-x-6 w-full max-w-md md:max-w-2xl lg:max-w-3xl ">
						<h1 className="text-2xl hidden sm:block font-semibold text-blue-700">
							PEOPLEBOOK
						</h1>
						<figure className="relative h-8 w-8 block sm:hidden">
							<Image src="/images/p-logo2.png" layout="fill" />
						</figure>
						<div className="relative w-6 md:w-48 mr-3 rounded-3xl">
							<input
								type="search"
								placeholder="search peoplebook"
								className="w-full border-0 rounded-3xl h-10 pl-10 focus:outline-none font-semibold pr-0 md:pr-5 bg-gray-100 text-xs"
							/>
							<SearchIcon className="text-gray-400 h-5 absolute inset-y-2 inset-x-2" />
						</div>
						<div className="flex items-center gap-4 justify-end sm:justify-between mx-3 flex-grow max-w-[12rem] md:max-w-xs">
							<HomeIcon className="nav-icon hidden sm:block" />
							<BellIcon className="nav-icon hidden sm:block" />
							<InboxIcon className="nav-icon hidden sm:block" />
							<FilmIcon className="nav-icon hidden sm:block" />
							<MenuIcon className="nav-icon sm:hidden" />
						</div>
					</div>
					<div className="flex capitalize items-center flex-shrink-0">
						{session ? (
							<>
								<img
									src={session?.user?.image}
									alt=""
									className="rounded-full h-9 w-9 mx-3 cursor-pointer"
									onClick={() => signOut()}
								/>
								<h2 className="text-gray-900 truncate w-15 text-sm sm:text-lg">
									{
										session?.user?.name.split(" ")[
											session?.user?.name.split(" ").length - 1
										]
									}
								</h2>
							</>
						) : (
							<div className="flex">
								<LoginIcon className="nav-icon" />
								<Link
									href="/signin"
									className="text-gray-900 truncate w-15 text-sm sm:text-lg"
								>
									Sign In
								</Link>
							</div>
						)}
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
