import { SearchIcon, BellIcon, InboxIcon, FilmIcon, HomeIcon } from "@heroicons/react/outline"
const Header = ({ children }) => {
	return (
		<div className="">
			<header className="bg-white shadow-lg w-full">
				<div className="flex justify-between w-full max-w-7xl p-3 mx-auto">
					<div className=" flex justify-between items-center gap-x-6 w-auto">
						<h1 className="text-xl font-semibold text-gray-900">PEOPLEBOOK</h1>
						<div className="relative w-44 rounded-3xl">
							<input
								type="search"
								placeholder="search peoplebook"
								className="w-full border-0 rounded-3xl h-8 pl-10 focus:outline-none font-semibold pr-5 bg-gray-100 text-xs"
							/>
							<SearchIcon className="text-gray-400 h-5 absolute inset-y-2 inset-x-2" />
						</div>
					</div>
					<div className="flex capitalize items-center">
						<div className="h-full flex items-center">
							<HomeIcon className="nav-icon" />
						</div>
						<div className="h-full flex items-center">
							<BellIcon className="nav-icon" />
						</div>
						<div className="h-full flex items-center">
							<InboxIcon className="nav-icon" />
						</div>
						<div className="h-full flex items-center">
							<FilmIcon className="nav-icon" />
						</div>
					</div>
					<div className="flex capitalize items-center">
						<img src="/images/new4.jpg" alt="" className="rounded-full h-9 w-9 mx-3" />
						<h2 className="text-gray-900">someone</h2>
					</div>
				</div>
			</header>
			{children}
		</div>
	)
}

export default Header
