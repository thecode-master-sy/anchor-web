"use server";

type FormState = {
	error: boolean;
	message: string;
};
export default async function FormAction(
	formState: FormState,
	formData: FormData
) {
	const couponCode = formData.get("coupon-code") as string;

	if (couponCode == "") {
		return {
			error: true,
			message: "code is required to create account",
		};
	}
	return {
		error: false,
		message: "successfully signed in",
	};
}
