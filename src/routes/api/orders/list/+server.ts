import {json} from "@sveltejs/kit";
import {OrdersStore} from "$lib/orders-store";

export async function GET() {
	return json(OrdersStore, { status: 200 });
}