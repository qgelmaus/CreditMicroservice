"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "Manage" },
  { href: "/booking", label: "Book" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-800 border-b shadow-sm text-white ">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-3 items-center">
        <div className="text-left">
          <Link href="/" className="text-3xl font-bold">
            <Image
              src="/logo.png"
              alt="Logo"
              width={1600}
              height={850}
              className="h-25 w-auto"
            />
          </Link>
        </div>
        <div className="flex justify-center gap-6 text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-white hover:text-gray-500 transition text-2xl",
                {
                  "font-semibold underline underline-offset-5":
                    pathname === href,
                },
              )}
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
