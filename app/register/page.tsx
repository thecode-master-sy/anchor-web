"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
	return (
		<form>
			<Input name="firstname" placeholder="enter your name" type="text" />
			<Input name="lastname" placeholder="enter your name" type="text" />
			<div className="flex gap-2">
				<Input name="code" placeholder="enter your register code" type="text" />
				<a
					href="https://wa.link/812h7w"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					Get code
				</a>
			</div>

			<Button>Continue</Button>
		</form>
	);
}
