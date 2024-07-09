"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	const isAdminPage = pathname?.includes("/admin");
	const isUserPage = pathname?.includes("/user");
	const isProPage = pathname?.includes("/pro");

	return (
		<div className="fixed top-12 left-0 w-full flex items-center justify-center">
			<div className="flex items-center bg-slate-200/10 gap-2 py-1 px-2 rounded-lg border border-slate-300/10 shadow mb-12">
				{(isAdminPage || isUserPage || isProPage) && (
					<Link
						href={"/"}
						className="text-white text-sm font-semibold p-2 hover:bg-slate-900 rounded-md transition"
					>
						Homepage
					</Link>
				)}

				{!isUserPage && (
					<Link
						href={"user"}
						className="text-white text-sm font-semibold p-2 hover:bg-slate-900 rounded-md transition"
					>
						Go to User Page
					</Link>
				)}

				{!isProPage && (
					<Link
						href={"pro"}
						className="text-white text-sm font-semibold p-2 hover:bg-slate-900 rounded-md transition"
					>
						Go to Pro Page
					</Link>
				)}

				{!isAdminPage && (
					<Link
						href={"admin"}
						className="text-white text-sm font-semibold p-2 hover:bg-slate-900 rounded-md transition"
					>
						Go to Admin Page
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
