import Image from "next/image";
import "./onboarding.css";

function Onboarding() {
	return (
		<div className="onboarding w-4xl">
			<Image src={"/logo.png"} alt="Orbit" width={50} height={50}></Image>
			<div className="heading-text">
				<h1 className="text-4xl font-semibold">Set up your profile</h1>
				<p>
					This is what clients will see before you ever talk to them.
				</p>
			</div>

			<form action="/dashboard">
				<div className="form-col">
					<div className="form-group">
						<label htmlFor="fullName">Full Name</label>
						<input
							type="text"
							id="fullName"
							placeholder="e.g. Jordan Ade"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="work">What do you do?</label>
						<input
							type="text"
							id="work"
							placeholder="e.g. Graphic designer, developer"
							required
						/>
					</div>
				</div>
				<div className="form-col">
					<div className="form-group">
						<label htmlFor="portfolio-link">Portfolio link</label>
						<input
							type="text"
							id="portfolio-link"
							placeholder="e.g. jordanade.dev"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="gigsToFind">
							What kind of gigs are you looking for?
						</label>
						<input
							type="text"
							id="gigsToFind"
							placeholder="e.g. Logo design, freelance writing..."
							required
						/>
					</div>
				</div>
				<div className="form-col">
					<div className="form-group">
						<label htmlFor="social-links">
							Social or professional links
						</label>
						<input
							type="text"
							id="social-links"
							placeholder="Instagram, LinkedIn, Behance, X, etc."
						/>
					</div>
				</div>
				<div className="form-col section">
					<div className="heading-text">
						<h3 className="text-3xl font-semibold">
							Payment Details
						</h3>
						<p>
							This is shared with clients so they can pay you
							directly. We don't process payments.
						</p>
					</div>
					<div className="form-col">
						<div className="form-group">
							<label htmlFor="account-name">Account Number</label>
							<input
								type="text"
								id="account-name"
								placeholder="e.g. 012 345 6789"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="bank-name">Bank name</label>
							<input
								type="text"
								id="bank-name"
								placeholder="e.g. Apex Bank"
							/>
						</div>
					</div>
				</div>

				<button type="submit" className="btn btn-primary">
					Finish Setup
				</button>
			</form>
		</div>
	);
}

export default Onboarding;
