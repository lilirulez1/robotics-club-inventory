import type {RobotTeam} from "$lib/constants";
import {RobotsStore} from "$lib/robots-store";

export async function POST({ request }) {
	const new_robot: RobotTeam = await request.json();

	RobotsStore.push(new_robot);

	return new Response(JSON.stringify({ success: true }), {
		headers: { 'Content-Type': 'application/json' },
	});
}