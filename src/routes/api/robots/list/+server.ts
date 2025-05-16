import {json} from "@sveltejs/kit";
import {RobotsStore} from "$lib/robots-store";

export async function GET() {
	return json(RobotsStore, { status: 200 });
}