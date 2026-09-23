import "./gig-feed.css";
import Sidebar from "../components/Sidebar";

function gigFeed() {
	const gigs = [
		// {
		// 	title: "Logo design for a small bakery",
		// 	description: "Client needs a clean, modern logo, budget flexible",
		// },
		// {
		// 	title: "Logo design for a small bakery",
		// 	description: "Client needs a clean, modern logo, budget flexible",
		// },
		// {
		// 	title: "Logo design for a small bakery",
		// 	description: "Client needs a clean, modern logo, budget flexible",
		// },
		// {
		// 	title: "Logo design for a small bakery",
		// 	description: "Client needs a clean, modern logo, budget flexible",
		// },
	];

	return (
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
						<input type="text" placeholder="Search for gigs..." />
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
							We're finding gigs that match your profile. Check
							back soon.
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
								<div className="btns">
									<button
										type="submit"
										className="btn btn-primary"
									>
										View Gig
									</button>
									<button
										type="submit"
										className="btn btn-success"
									>
										Take this Gig
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default gigFeed;
