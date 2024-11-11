"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import FormAction from "./actions";
import { useFormState } from "react-dom";

function SelectDemo() {
	return (
		<Select>
			<SelectTrigger className=" border-gray-600">
				<SelectValue placeholder="Select a Package" />
			</SelectTrigger>
			<SelectContent className="bg-black border-gray-800">
				<SelectGroup className="text-muted-foreground">
					<SelectLabel>Packages</SelectLabel>
					<SelectItem value="pro" className="hover:bg-gray-800">
						Pro Package
					</SelectItem>
					<SelectItem value="silver">Silver Package</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

function CheckboxDemo() {
	return (
		<div className="flex items-center space-x-2 mt-2">
			<Checkbox id="terms" className="border border-muted-foreground" />
			<label
				htmlFor="terms"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
			>
				Accept terms and conditions
			</label>
		</div>
	);
}

const SetpOne = ({
	setCurrentStep,
}: {
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
	return (
		<div className="grid gap-4 w-full max-w-[450px] mx-auto">
			<FormGroup>
				<label htmlFor="firstname" className="text-muted-foreground">
					Firstname
				</label>
				<Input
					name="firstname"
					type="text"
					id="firstname"
					placeholder="Enter firstname"
					className="border border-gray-600"
				/>
			</FormGroup>
			<FormGroup>
				<label htmlFor="lastname" className="text-muted-foreground">
					Lastname
				</label>
				<Input
					name="lastname"
					type="text"
					id="lastname"
					placeholder="Enter lastname"
					className="border border-gray-600"
				/>
			</FormGroup>
			<FormGroup>
				<label htmlFor="username" className="text-muted-foreground">
					Username
				</label>
				<Input
					name="username"
					type="text"
					id="username"
					placeholder="Enter username"
					className="border border-gray-600"
				/>

				<Button
					className="bg-red-800 hover:bg-red-700"
					onClick={() => setCurrentStep((previousStep) => previousStep + 1)}
				>
					Continue
				</Button>
			</FormGroup>
		</div>
	);
};

const StepTwo = ({
	setCurrentStep,
}: {
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
	return (
		<div className="grid gap-4 w-full max-w-[450px] mx-auto">
			<FormGroup>
				<label htmlFor="phone-number" className="text-muted-foreground">
					Phone number
				</label>
				<Input
					name="phone-number"
					type="tel"
					id="phone-number"
					placeholder="Enter phone number"
					className="border border-gray-600"
				/>
			</FormGroup>
			<FormGroup>
				<label htmlFor="password" className="text-muted-foreground">
					Password
				</label>
				<Input
					name="password"
					type="password"
					id="password"
					placeholder="Password"
					className="border border-gray-600"
				/>
			</FormGroup>
			<FormGroup>
				<label htmlFor="confirm-password" className="text-muted-foreground">
					Confirm password
				</label>
				<Input
					name="confirm-password"
					type="password"
					id="confirm-password"
					placeholder="Confirm Password"
					className="border border-gray-600"
				/>
				<div className="flex w-full gap-2">
					<Button
						className="flex-1"
						onClick={() => setCurrentStep((previousStep) => previousStep - 1)}
					>
						Previous
					</Button>
					<Button
						className="bg-red-800 hover:bg-red-700 flex-1"
						onClick={() => setCurrentStep((previousStep) => previousStep + 1)}
					>
						Continue
					</Button>
				</div>
			</FormGroup>
		</div>
	);
};

const initialFormState = {
	error: false,
	message: "",
};

const StepThree = ({
	setCurrentStep,
}: {
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [state, formAction] = useFormState(FormAction, initialFormState);
	return (
		<form
			className="grid gap-4 w-full max-w-[450px] mx-auto"
			action={formAction}
		>
			{state.error && (
				<p className="text-red-500 text-center">{state.message}</p>
			)}
			<FormGroup>
				<label htmlFor="coupon-code" className="text-muted-foreground">
					Coupon code
				</label>
				<Input
					name="coupon-code"
					type="text"
					id="coupon-code"
					placeholder="Coupon code"
					className="border border-gray-600"
				/>
			</FormGroup>
			<SelectDemo />
			<FormGroup>
				<label htmlFor="reffered-by" className="text-muted-foreground">
					Reffered by
				</label>
				<Input
					name="referred-by"
					type="text"
					id="reffered-by"
					placeholder="bellah02"
					className="border border-gray-600"
				/>
			</FormGroup>
			<CheckboxDemo />
			<div className="flex w-full gap-2 mt-2">
				<Button
					className="flex-1"
					onClick={() => setCurrentStep((previousStep) => previousStep - 1)}
				>
					Previous
				</Button>
				<Button type="submit" className="bg-red-800 hover:bg-red-700 flex-1">
					Continue
				</Button>
			</div>
			<div className="flex justify-center gap-1">
				<p>Don't have a code?</p>
				<a
					className="text-orange-500"
					href="https://wa.link/m8j44x"
					target="_blank"
					rel="noopener noreferrer"
				>
					Get code here
				</a>
			</div>
		</form>
	);
};

export default function Register() {
	const [currentStep, setCurrentStep] = useState(0);
	const stepArray = [
		<SetpOne setCurrentStep={setCurrentStep} />,
		<StepTwo setCurrentStep={setCurrentStep} />,
		<StepThree setCurrentStep={setCurrentStep} />,
	];
	return (
		<div className="flex flex-col gap-4 min-h-[100vh] justify-center px-4">
			<div className="w-[170px] relative h-[50px] mx-auto">
				<Image
					src={Logo}
					alt="logo"
					className="w-full h-full absolute object-cover"
				/>
			</div>
			<h1 className="text-3xl font-bold text-center text-muted-foreground">
				Create an Account
			</h1>
			{stepArray[currentStep]}
		</div>
	);
}

const FormGroup = ({ children }: { children: React.ReactNode }) => {
	return <div className="grid gap-2">{children}</div>;
};
