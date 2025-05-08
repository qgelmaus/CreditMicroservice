'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
	{ href: "/", label: "Manage" },
	{href: "/booking", label: "Book"},
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
	
];

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="bg-blue-400 border-b shadow-sm">
			<div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-3 items-center">
				<div className="text-left">
					<Link href="/" className="text-xl font-bold">
						CustomerDemo
					</Link>
				</div>
				<div className="flex justify-center gap-6 text-sm">
					{links.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className={clsx("text-gray-900 hover:text-black transition text-xl", {
								"font-semibold underline underline-offset-4": pathname === href,
							})}
						>
							{label}
						</Link>
					))}
				</div>
				<div />{" "}
				{/* Placeholder for højre side, hvis du vil tilføje knapper fx login */}
			</div>
		</nav>
	);
}
