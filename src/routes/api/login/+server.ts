import {error, redirect} from "@sveltejs/kit";

interface LoginRequest {
	username: string;
	password: string;
}

export async function POST({request}) {
	const data: LoginRequest = await request.json();

	if (data.username !== "abc") {
		throw error(401, "Username is incorrect.");
	}

	if (data.password !== "123") {
		throw error(401, "Password is incorrect.");
	}

	return new Response();
}