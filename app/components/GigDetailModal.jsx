"use client";

import { useState } from "react";

function GigDetailModal({ selectedGig, setSelectedGig }) {
	const [isInterested, setIsInterested] = useState(false);

	return (
		<div
			className="fixed inset-0 bg-black/50 flex items-center justify-center modal-underlay"
			onClick={() => setSelectedGig(null)}
		>
			{isInterested ? (
				<>
					<div className="confirmed modal-dialog text-center max-w-xl w-full">
						<img src="/icons/check-circle.svg" alt="" />
						<header>
							<h1 className="text-4xl font-semibold">
								You're in!
							</h1>
							<p className="mt-2">
								We're closing this with Sweetcrumb Bakery.
								<br />
								You'll see it on your dashboard once it's
								confirmed.
							</p>
						</header>
						<button
							className="btn btn-primary mt-3"
							onClick={() => {
								setSelectedGig(null);
							}}
						>
							Back to Dashboard
						</button>
					</div>
				</>
			) : (
				<div
					className="max-w-3xl w-full modal-dialog"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="icon">
						<img
							src="/icons/x.svg"
							alt="Close modal"
							onClick={() => {
								setSelectedGig(null);
							}}
						/>
					</div>
					<div className="text">
						<h2 className="text-4xl font-semibold">
							{selectedGig.title}
						</h2>
						<p className="mt-2">{selectedGig.details}</p>
					</div>
					<div className="details mt-4">
						<div className="other">
							<div className="detail">
								<span>Timeline: </span>
								{selectedGig.timeline}
							</div>
							<div className="detail">
								<span>Posted by: </span>
								{selectedGig.client}
							</div>
						</div>
						<div className="price text-xl font-semibold">
							{selectedGig.price}
						</div>
					</div>
					<p className="my-3">
						We'll reach out to the client and close the deal for you
					</p>

					<div className="btns">
						<button
							className="btn btn-red"
							onClick={() => {
								setSelectedGig(null);
							}}
						>
							Not Interested
						</button>
						<button
							className="btn btn-success"
							onClick={() => {
									setSelectedGig((gig) => ({
										...gig,
										status: "In Progress",
									}));
								setIsInterested(true);
							}}
						>
							Take this gig
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default GigDetailModal;
