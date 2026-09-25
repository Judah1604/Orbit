"use client";

import "./gig-feed.css";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import GigDetailModal from "../components/GigDetailModal";

function gigFeed() {
	const [selectedGig, setSelectedGig] = useState(null);
	const gigs = [
		{
			title: "Logo design for a small bakery",
			description:
				"A clean, modern logo that still feels warm and handmade. Something that works on packaging, signage, and Instagram.",
			details:
				"We're a small bakery based in Lekki looking to refresh our brand. We want 2-3 initial concepts, then one round of revisions on the final pick. Final files needed in PNG, SVG, and a version for print. No rush, but we'd like it wrapped up within the week.",
			client: "Sweetcrumb Bakery",
			timeline: "5 days",
			price: "₦45,000 – ₦60,000",
			status: "In Progress",
		},
		{
			title: "Landing page copy for a fintech app",
			description:
				"Sharp, conversion focused copy for a new savings app landing page.",
			details:
				"We're launching a savings app targeted at young professionals. Need copy for the hero section, three feature blocks, and an FAQ. Tone should be confident but approachable, no jargon.",
			client: "Vaultly",
			timeline: "3 days",
			price: "₦35,000",
		},
		{
			title: "Instagram content calendar",
			description:
				"One month of post ideas and captions for a skincare brand.",
			details:
				"Looking for someone to plan 20 posts across the month, mix of product shots, tips, and UGC style content. Captions should be short and playful, brand voice is fun but informative.",
			client: "Glowhaus",
			timeline: "1 week",
			price: "₦50,000",
		},
		{
			title: "Portfolio website build",
			description: "A simple 4-page site to showcase photography work.",
			details:
				"Need a clean, image-forward site: home, portfolio grid, about, and contact. No CMS needed, just a static site that's easy to update manually later.",
			client: "Tobi Fashanu Photography",
			timeline: "10 days",
			price: "₦80,000 – ₦100,000",
		},
		{
			title: "Voiceover for a product explainer video",
			description:
				"60 second explainer video needs a warm, clear voiceover.",
			details:
				"Script is already written, about 150 words. Looking for a natural, friendly tone, not overly corporate. Deliverable as a clean WAV file.",
			client: "Loop Robotics",
			timeline: "2 days",
			price: "₦15,000",
		},
		{
			title: "Pitch deck redesign",
			description:
				"Cleaning up a 12 slide investor deck for visual consistency.",
			details:
				"Content is finalized, we just need it to look sharper and more consistent. Simple, modern style, minimal color palette, needs to be exportable as PDF.",
			client: "Farmlink",
			timeline: "4 days",
			price: "₦60,000",
		},
	];

	return (
		<>
			<div className="wrapper">
				<Sidebar />
				<div className="main gig-feed">
					<header>
						<h1 className="text-4xl font-semibold">Your gigs</h1>
						<p>
							Matched to your profile. Approve the ones you want,
							we'll handle the rest.
						</p>
					</header>
					<div className="search">
						<div className="input">
							<img src="/icons/search.svg" alt="search" />
							<input
								type="text"
								placeholder="Search for gigs..."
							/>
						</div>
						<div className="filter">
							<img src="/icons/filter.svg" alt="search" />
							<span>Filter</span>
						</div>
					</div>
					{gigs.length === 0 ? (
						<div className="no-gigs">
							<h2 className="text-4xl font-semibold">
								Nothing here yet!
							</h2>
							<p>
								We're finding gigs that match your profile.
								Check back soon.
							</p>
						</div>
					) : (
						<div className="gigs">
							{gigs.map((gig, index) => (
								<div className="gig" key={index}>
									<div className="text">
										<h2 className="text-2xl font-medium">
											{gig.title}
										</h2>
										<p>{gig.description}</p>
									</div>
									<button
										type="submit"
										className="btn btn-primary"
										onClick={() => setSelectedGig(gig)}
									>
										View Gig
									</button>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			{selectedGig && (
				<GigDetailModal
					selectedGig={selectedGig}
					setSelectedGig={setSelectedGig}
				/>
			)}
		</>
	);
}

export default gigFeed;
