import Logo from "@/assets/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronsRight, UserPlus } from "lucide-react";
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
import tiktok from "@/assets/tiktok-icon.png";
import whatsapp from "@/assets/whatsapp-icon.png";
import telegram from "@/assets/telegram-icon.png";
import { Users } from "lucide-react";

export default function NavBar({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<nav className="flex justify-between items-center">
			<div className="w-[170px] relative h-[50px]">
				<Image
					src={Logo}
					alt="logo"
					className="w-full h-full absolute object-cover"
				/>
			</div>

			<div className="hidden md:block">
				<ul className="flex gap-7 items-center">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogTrigger asChild>
					<Button
						onClick={() => setIsOpen(true)}
						className="bg-white text-black gap-2 hover:bg-gray-200"
					>
						<UserPlus size={16} />
						<span>Register</span>
					</Button>
				</DialogTrigger>
				<DialogContent className="border-gray-800 bg-black">
					<DialogHeader className="grid gap-5">
						<DialogTitle className="text-3xl">Get Registered Now!</DialogTitle>
						<p>
							Message our verfied agent on whatsapp for your anchor Registration
						</p>

						<Button
							size="lg"
							className="bg-red-700 hover:bg-red-500 max-w-[200px]"
							asChild
						>
							<a
								href="https://wa.link/812h7w"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span>Click here</span>
								<ChevronsRight />
							</a>
						</Button>
					</DialogHeader>
					{/* Add your form or content here */}
					<DialogFooter className="grid">
						<p>
							it is also important for you to join our verfied social handles
							for more information on how anchor works
						</p>

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

						<p className="mt-4">
							Follow our backup account for more info on anchor
						</p>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</nav>
	);
}
