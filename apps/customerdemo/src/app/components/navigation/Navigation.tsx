"use client"; // hvis du bruger app-router

import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-white border-b shadow-sm">
			<div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
				<Link href="/" className="text-xl font-bold">
					CustomerDemo
				</Link>
				<div className="flex gap-6 text-sm">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/contact">Contact</Link>
				</div>
			</div>
		</nav>
	);
}
