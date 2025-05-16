import type {Order} from "$lib/constants";
import {OrdersStore} from "$lib/orders-store";

export async function POST({ request }) {
	const new_order: Order = await request.json();

	OrdersStore.push(new_order);

	return new Response(JSON.stringify({ success: true }), {
		headers: { 'Content-Type': 'application/json' },
	});
}