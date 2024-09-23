"use client";
import Image from "next/image";
import NavBar from "./_components/navbar";
import anchorMe from "@/assets/anchorme.jpg";
import { Button } from "@/components/ui/button";
import { ChevronsRight, Clock3 } from "lucide-react";
import anchorTitktok from "@/assets/anchortiktok.jpg";
import multinational from "@/assets/multinational.jpg";
import silverPackage from "@/assets/silver-package.jpg";
import proPackage from "@/assets/pro-package.jpg";
import { useState } from "react";
import cac from "@/assets/cac.jpg";
import roadmap from "@/assets/roadmap.jpg";
import { Users } from "lucide-react";
import tiktok from "@/assets/tiktok-icon.png";
import whatsapp from "@/assets/whatsapp-icon.png";
import telegram from "@/assets/telegram-icon.png";
import Logo from "@/assets/logo.png";
import Link from "next/link";

import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";

export default function Home() {
	const [selectedPackage, setSelectedPackage] = useState("silver");
	const [isOpen, setIsOpen] = useState(false);
	const [regModalOpen, setRegModalOpen] = useState(false);

	return (
		<div className="p-4 anchor-container">
			<NavBar isOpen={regModalOpen} setIsOpen={setRegModalOpen} />

			<div className="rounded-xl overflow-hidden relative w-full mt-7">
				<Image
					src={anchorMe}
					alt="anchor-me"
					className="w-full md:aspect-[1/0.7]"
				/>
				<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-60" />
				<Dialog open={isOpen} onOpenChange={setIsOpen}>
					<DialogTrigger asChild>
						<Button size="lg" className="absolute bottom-10 left-10">
							<span>How it works</span>
							<ChevronsRight />
						</Button>
					</DialogTrigger>
					<DialogContent className="border-gray-800 bg-black">
						<DialogHeader className="grid gap-4">
							<DialogTitle className="text-3xl">How It Works</DialogTitle>
							<DialogDescription className="text-white grid gap-4">
								<p>
									Anchor is simply a smart online job/social advert business
									that pays every week, for doing these 👇🏽👇🏽
								</p>

								<ol className="list-decimal grid gap-4 px-4">
									<li>
										For Engaging on TikTok and Facebook posts to earn ₦1,200
										every day.
									</li>
									<li>Performing Simple social Tasks</li>
									<li>
										Working Advert Jobs for Foreign brands to earn every week.
									</li>
								</ol>
								<p>
									The best part is that Anchor Has Partnered with FaceBook,
									Instagram and TikTok so that you can Monetise their social
									media accounts and get paid every week.. You can make as much
									as ₦60,000 or more every week once you register on Anchor....
									And all you need for Anchor is your WhatsApp, or any other
									social media accounts you have... (Referral is Optional 💯)
								</p>
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button
								className="w-full bg-white text-black hover:bg-gray-300"
								onClick={() => setRegModalOpen(true)}
							>
								Click here to Register
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
				<p className="absolute bottom-10 right-10 max-w-[45ch] hidden md:block">
					Anchor is simply a smart online job or social advert business that
					pays every week for doing some tasks. We are partnered with facebook,
					instagram and tiktok so that you can monetise their social media
					accounts and get paid every week.
				</p>
			</div>

			<div id="#about" className="mt-32">
				<h1 className=" text-5xl md:text-7xl font-bold text-orange-200">
					Who we are?
				</h1>

				<div className="px-10 py-10 bg-[#110C09] mt-4 rounded-3xl border border-gray-800">
					<p>
						<span className="text-red-600">Anchor</span> origninally represents
						something that brings stability, support and that can be relied
						upon. Achor is a universal framework that connects globally
						continously and was set up after series of serial entrepreneurs with
						experience and expertise came up with a framework taht would help in
						providing finacial and non financial support and stability. On
						Anchor, we provide services that would help various users accros the
						continent in ensuring that their internet and online presence is not
						take as a waste of time
					</p>

					<div className="py-4 px-4 rounded-md bg-[#242520] mt-7 max-w-[550px]">
						<p>On Anchor, our users welfare is always a top poirity.</p>
					</div>
				</div>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[#110C09] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>waitlist</span>
					</Button>
				</div>

				<div className="px-10 py-10 bg-[#110C09] mt-7 rounded-3xl border border-gray-800">
					<h1 className=" text-5xl md:text-7xl font-bold text-orange-200">
						Register Now!
					</h1>

					<p className="mt-7">
						Be the first to experience the future of connectivity and
						innovation. By joining our waitlist, you'll gain exclusive access to
						our latest updates and insights. Click on the button below to get
						started and be a part of something extraordinary
					</p>

					<Button
						onClick={() => setRegModalOpen(true)}
						size="lg"
						className="bg-white w-full max-w-64 text-black mt-7 hover:bg-gray-200"
					>
						Click here to Register
					</Button>
				</div>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[#110C09] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>what you would get</span>
					</Button>
				</div>

				<div className="mt-7 rounded-xl overflow-hidden relative">
					<Image
						src={anchorTitktok}
						alt="anchor tiktok"
						className="w-full md:aspect-[1/0.7]"
					/>
				</div>

				<div className="mt-7 px-4">
					<h1 className=" text-3xl md:text-4xl font-bold">
						Here's how you can earn on Anchor, once you get Registered
					</h1>

					<ol className="list-decimal mt-7 grid gap-4 px-4">
						<li>
							Once you get Registered, you receive an Enrollment Cashback of
							₦5,000, which you can withdraw anytime.
						</li>

						<li>
							You can do the Daily TikTok Social Job to get an extra ₦1,200
							daily.
						</li>

						<li>You can play Anchor games and win up to ₦25,000 weekly.</li>

						<li>
							You can participate in daily Spillover Earnings, daily Anchor
							Tenacious Rewards, Spin to Win, and Weekly TikTok challenge to win
							amazing prizes 😍
						</li>
					</ol>

					<p className="mt-7">
						WITHRAWAL IS THREE TIMES A WEEK WITH MINIMUM OF ₦10,000 Now,
						Registration fee is a One-time payment of ₦6,000.... AND AFTER
						REGISTRATION, YOU WILL GET ADDED TO THE VIP GROUP WHERE I'LL TEACH
						YOU HOW TO MAKE ₦60K to ₦80K WEEKLY
					</p>

					<Button
						onClick={() => setRegModalOpen(true)}
						size="lg"
						className="bg-white w-full max-w-64 text-black mt-7 hover:bg-gray-200"
					>
						Click here to Register
					</Button>
				</div>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[#110C09] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>We are multinational</span>
					</Button>
				</div>

				<div className="mt-7 rounded-xl overflow-hidden relative w-full">
					<Image
						src={multinational}
						alt="anchor multinational"
						className="w-full md:aspect-[1/0.7]"
					/>
				</div>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[#110C09] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>Earning Graph</span>
					</Button>
				</div>

				<div className="flex gap-4 justify-center items-center mt-7">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[#110C09] border border-gray-500"
						onClick={() => setSelectedPackage("silver")}
					>
						<span>Silver Package</span>
					</Button>

					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[#110C09] border border-gray-500"
						onClick={() => setSelectedPackage("pro")}
					>
						<span>Pro Package</span>
					</Button>
				</div>

				<div className="mt-7 rounded-xl overflow-hidden relative w-full">
					<Image
						src={selectedPackage == "silver" ? silverPackage : proPackage}
						className="w-full md:aspect-[1/0.7]"
						alt="package images"
					/>
				</div>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[#110C09] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>Earning Graph</span>
					</Button>
				</div>

				<div className="mt-7 rounded-xl overflow-hidden relative w-full">
					<Image
						src={cac}
						className="w-full md:aspect-[1/0.7]"
						alt="package images"
					/>
				</div>

				<div className="px-5 flex justify-center itmes-center">
					<div className="py-4 px-4 rounded-md bg-[#242520] mt-7 max-w-[550px]">
						<p>Anchor is registered and is safe for every user.</p>
					</div>
				</div>
			</div>

			<div className="mt-32">
				<div className="flex justify-center">
					<Button
						size="lg"
						className="gap-2 items-center rounded-full bg-[#110C09] border border-gray-500"
					>
						<Clock3 size={16} />
						<span>Roadmap to stability and connection</span>
					</Button>
				</div>

				<div className="mt-7 rounded-xl overflow-hidden relative w-full">
					<Image
						src={roadmap}
						className="w-full md:aspect-[1/0.7]"
						alt="roadmap"
					/>
				</div>

				<div className="px-5">
					<div className="py-4 px-4 rounded-md bg-[#242520] mt-7">
						<p>
							Anchor is registered and is safe for every user. Our commitment to
							security ensures that your data is protected with the highest
							standards. We prioritize transparency and user trust, providing
							regular updates and insights into our operations. Join us in
							building a reliable and innovative platform that empowers users
							across the globe.
						</p>
					</div>
				</div>
			</div>

			<div className="mt-14 flex flex-col justify-center items-center">
				<Button className="bg-[#110C09]  border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150px] flex-row gap-x-2 items-center">
					<Clock3 size={16} />
					<span className="text-white text-base font-bold">Join Us</span>
				</Button>

				<div className="flex gap-x-2 mt-7">
					<Button
						asChild
						variant="ghost"
						className="bg-[#110C09] h-full hover:bg-gray-900 p-4 border border-gray-500 rounded-lg"
					>
						<a
							href="https://wa.link/812h7w"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={whatsapp}
								className="w-[30px] h-[30px]"
								alt="whatsapp image"
							/>
						</a>
					</Button>
					<div className="bg-[#110C09] p-4 border border-gray-500 rounded-lg">
						<Image
							src={telegram}
							className="w-[30px] h-[30px]"
							alt="telegram icon"
						/>
					</div>
					<div className="bg-[#110C09] p-4 border border-gray-500 rounded-lg">
						<Image
							src={tiktok}
							className="w-[30px] h-[30px]"
							alt="tiktok icon"
						/>
					</div>
					<div className="bg-[#110C09] p-4 border border-gray-500 rounded-lg">
						<Users />
					</div>
				</div>
			</div>

			<div className="w-[170px] relative h-[50px] mx-auto mt-7">
				<Image
					src={Logo}
					alt="logo"
					className="w-full h-full absolute object-cover"
				/>
			</div>

			<div className="flex flex-col items-center justify-center mt-7">
				<p className="text-white text-center text-base">
					All rights reserved @Anchor 2024
				</p>

				<Link href="/legal/privacy-policy" className="mt-4 block underline">
					Privacy policy
				</Link>
			</div>
		</div>
	);
}
