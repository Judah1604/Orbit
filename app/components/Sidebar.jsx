"use client";

import Image from "next/image";
import "./sidebar.css";
import { usePathname } from "next/navigation";

function Sidebar() {
	const pathname = usePathname();
	const navlinks = [
		{ title: "Gig Feed", icon: "feed.svg", to: "/gig-feed" },
		{ title: "Dashboard", icon: "grid.svg", to: "/dashboard" },
		{ title: "Profile", icon: "user.svg", to: "/profile" },
	];
	return (
		<div className="sidebar">
			<div className="top">
				<Image
					src={"/logo.png"}
					alt="Orbit"
					width={90}
					height={90}
				></Image>
				<div className="links">
					{navlinks.map((navlink, index) => (
						<a
							href={navlink.to}
							key={index}
							className={
								pathname.includes(navlink.to) ? "active" : ""
							}
						>
							<img
								src={"/icons/" + navlink.icon}
								alt={navlink.title}
							/>
							{navlink.title}
						</a>
					))}
				</div>
			</div>
			<div className="bottom">
				<Image
					src={"/userpic.png"}
					alt="user"
					width={30}
					height={30}
				></Image>
				<span>Judah Oyedele</span>
			</div>
		</div>
	);
}

export default Sidebar;
