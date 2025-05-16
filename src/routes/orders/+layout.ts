export async function load({ fetch }) {
	const response = await fetch("api/robots/list");
	const robot_teams = await response.json();
	return { robot_teams };
}