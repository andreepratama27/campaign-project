import Image from "next/image";
import CategoryFilter from "../category-filter";

export default function Navbar() {
	return (
		<nav className="flex h-14 items-center justify-between px-4 md:px-0">
			<div className="logo-wrapper">
				<Image src="/logo.png" width={100} height={80} alt="kitabisa-logo" />
			</div>
			<CategoryFilter />
		</nav>
	);
}
