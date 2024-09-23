"use client";
import NavBar from "@/app/_components/navbar";
import { useState } from "react";

export default function PrivacyPolicy({}: {}) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="anchor-container p-4">
			<NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
			<h1 className="md:text-6xl text-4xl font-bold mt-32 text-center">
				Privacy Policy
			</h1>
			<p className="text-white/65 text-center mt-4">
				Last updated: September 16, 2024
			</p>

			<div className="mt-14">
				<h2 id="1-introduction" className="md:text-3xl text-2xl font-bold">
					<a href="#1-introduction">1. Introduction</a>
				</h2>

				<p className="mt-4 leading-7 text-white/65">
					Anchor ("we," "us," or "our") is dedicated to safeguarding your
					privacy. This Privacy Policy outlines how we gather, utilize, share,
					and secure personal information through our mobile application
					("App"), website, and associated services.
				</p>
			</div>

			<div className="mt-14">
				<h2 id="2-scope" className="md:text-3xl text-2xl font-bold">
					<a href="#2-scope">2. Scope</a>
				</h2>

				<div className="mt-4 text-white/65">
					<span>This Privacy Policy is applicable to:</span>
					<ul className="mt-4 list-decimal px-4">
						<li>The Anchor mobile application </li>
						<li>The Anchor website</li>
						<li>Any other services or features offered by Anchor</li>
					</ul>
				</div>
			</div>

			<div className="mt-14">
				<h2
					id="3-information-collection"
					className="md:text-3xl text-2xl font-bold"
				>
					<a href="#2-information-collection">3. Information Collection</a>
				</h2>

				<div className="mt-4 text-white/65">
					<span>We gather information in several ways:</span>

					<h1 className="text-xl font-bold text-white mt-4">
						Personal Information
					</h1>

					<p className="mt-4">When you set up an account, we collect:</p>

					<ul className="mt-4 list-decimal px-4">
						<li>Name </li>
						<li>Email address</li>
						<li>Password (secured through hashing)</li>
						<li>Profile picture (optional)</li>
					</ul>

					<h1 className="text-xl font-bold text-white mt-4">Usage Data</h1>
					<p className="mt-4">
						We collect data regarding your app usage, which includes:
					</p>
					<ul className="mt-4 list-decimal px-4">
						<li>Login history</li>
						<li>Search queries</li>
						<li>Content interactions (e.g., likes, comments)</li>
						<li>Device information (e.g., model, operating system)</li>
					</ul>

					<h1 className="text-xl font-bold text-white mt-4">Location Data</h1>
					<p className="mt-4">
						We may gather location information to offer location-based features
						(with your consent).
					</p>

					<h1 className="text-xl font-bold text-white mt-4">Analytics Data</h1>
					<p className="mt-4">
						We utilize third-party analytics tools to collect data on app
						performance and usage.
					</p>
				</div>
			</div>

			<div className="mt-14">
				<h2
					id="3-information-use"
					className="md:text-3xl text-2xl font-bold text-white"
				>
					<a href="#3-information-use">3. Information Use</a>
				</h2>
				<p className="mt-4 leading-7 text-white/65">
					We use the information we collect for:
				</p>
				<ul className="mt-4 list-decimal px-4 text-white/65">
					<li>
						<strong>Account Management:</strong> To manage your account and
						deliver services
					</li>
					<li>
						<strong>Personalization:</strong> To customize your experience and
						suggest content
					</li>
					<li>
						<strong>Improvement:</strong> To enhance app performance and resolve
						issues
					</li>
					<li>
						<strong>Communication:</strong> To send notifications, updates, and
						marketing materials (with your consent)
					</li>
					<li>
						<strong>Compliance:</strong> To adhere to laws and regulations
					</li>
				</ul>
			</div>

			<div className="mt-14">
				<h2
					id="4-information-disclosure"
					className="md:text-3xl text-2xl font-bold text-white"
				>
					<a href="#4-information-disclosure">4. Information Disclosure</a>
				</h2>
				<p className="mt-4 leading-7 text-white/65">
					We may share information with:
				</p>
				<ul className="mt-4 list-decimal px-4 text-white/65">
					<li>
						<strong>Service Providers:</strong> To facilitate services (e.g.,
						payment processors)
					</li>
					<li>
						<strong>Third-Party Services:</strong> To integrate with other
						services (e.g., social media)
					</li>
					<li>
						<strong>Law Enforcement:</strong> To comply with legal requests or
						investigations
					</li>
					<li>
						<strong>Business Transfers:</strong> In the case of a merger,
						acquisition, or sale
					</li>
				</ul>
			</div>

			<div className="mt-14">
				<h2
					id="5-data-security"
					className="md:text-3xl text-2xl font-bold text-white"
				>
					<a href="#5-data-security">5. Data Security</a>
				</h2>
				<p className="mt-4 leading-7 text-white/65">
					We implement reasonable security measures to protect your information,
					including:
				</p>
				<ul className="mt-4 list-decimal px-4 text-white/65">
					<li>
						<strong>Encryption:</strong> To secure data transmission and storage
					</li>
					<li>
						<strong>Access Controls:</strong> To restrict access to authorized
						personnel
					</li>
					<li>
						<strong>Regular Updates:</strong> To ensure security patches and
						updates are applied
					</li>
				</ul>
			</div>

			<div className="mt-14">
				<h2
					id="6-data-retention"
					className="md:text-3xl text-2xl font-bold text-white"
				>
					<a href="#6-data-retention">6. Data Retention</a>
				</h2>
				<p className="mt-4 leading-7 text-white/65">
					We retain information for as long as necessary to provide services or
					as mandated by law.
				</p>
			</div>

			<div className="mt-14">
				<h2
					id="7-user-rights"
					className="md:text-3xl text-2xl font-bold text-white"
				>
					<a href="#7-user-rights">7. User Rights</a>
				</h2>
				<p className="mt-4 leading-7 text-white/65">You have the right to:</p>
				<ul className="mt-4 list-decimal px-4 text-white/65">
					<li>
						<strong>Access:</strong> Request access to your information
					</li>
					<li>
						<strong>Correct:</strong> Update or correct your information
					</li>
					<li>
						<strong>Delete:</strong> Request the deletion of your information
					</li>
					<li>
						<strong>Opt-Out:</strong> Opt-out of marketing communications or
						location tracking
					</li>
				</ul>
			</div>

			<div className="mt-14">
				<h2
					id="8-childrens-privacy"
					className="md:text-3xl text-2xl font-bold text-white"
				>
					<a href="#8-childrens-privacy">8. Children's Privacy</a>
				</h2>
				<p className="mt-4 leading-7 text-white/65">
					Our services are intended for users aged 13 and older. We do not
					knowingly collect personal information from children under 13.
				</p>
			</div>

			<div className="mt-14">
				<h2
					id="9-changes-to-this-policy"
					className="md:text-3xl text-2xl font-bold text-white"
				>
					<a href="#9-changes-to-this-policy">9. Changes to this Policy</a>
				</h2>
				<p className="mt-4 leading-7 text-white/65">
					We may revise this Privacy Policy. Changes will take effect upon
					posting.
				</p>
			</div>

			<div className="mt-14">
				<h2
					id="10-contact-us"
					className="md:text-3xl text-2xl font-bold text-white"
				>
					<a href="#10-contact-us">10. Contact Us</a>
				</h2>
				<p className="mt-4 leading-7 text-white/65">
					For questions, concerns, or requests regarding this Privacy Policy,
					please reach out to:
				</p>
				<p className="mt-4 leading-7 text-white/65">
					<strong>AnchorIt Inc.</strong>
					<br />
					anchoritng@gmail.com
					<br />
					33 Ogunka Street, WBHE
				</p>
			</div>

			<div className="mt-14">
				<h2 className="md:text-3xl text-2xl font-bold text-white">
					Acknowledgment
				</h2>
				<p className="mt-4 leading-7 text-white/65">
					By using the Anchor app, website, or services, you confirm that you
					have read, understood, and agree to this Privacy Policy.
				</p>
			</div>
		</div>
	);
}
