<script lang="ts">
	import '../app.css';
	import SidebarProvider from '\$lib/components/sidebar/sidebar-provider.svelte';
	import Sidebar from '\$lib/components/sidebar/sidebar.svelte';
	import SidebarItem from '\$lib/components/sidebar/sidebar-item.svelte';
	import Modal from '\$lib/components/modal/modal.svelte';
	import {goto} from "$app/navigation";
	import { page } from '$app/state';
	import {routes} from "$lib/constants";
	import {loggedIn} from "$lib/global-store";
	import ModalInput from "./robots/modal-input.svelte";

	let { children } = $props();

	let show_modal = $state(false);
</script>

<SidebarProvider>
	<Sidebar>
		<div class="flex flex-col">
			{#each routes as route}
				<SidebarItem
						onclick={() => { goto(route.url); }}
						selected={page.url.pathname === route.url}
				>{route.name}</SidebarItem>
			{/each}
		</div>

		<div class="grow w-full align-bottom items-end justify-end flex">
			<SidebarItem
					onclick={() => {
                        show_modal = true;
					}}
					selected={true}>
				Login
			</SidebarItem>
		</div>
	</Sidebar>

	<div class="grow flex flex-col max-h-screen">
		{@render children()}
	</div>
</SidebarProvider>

<Modal bind:show_modal={show_modal}>
	<div class="p-4 rounded-md border bg-white">
		<div class="font-bold">Login</div>

		<form method="POST" onsubmit={async (e) => {
            e.preventDefault();

	        const username = e.target.username.value;
            const password = e.target.password.value;

            const result = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({username, password})
            });

            if (result.ok) {
                loggedIn.set(true);
            }

            show_modal = false;
		}}>
			<div class="grid gap-4 py-4">
				<ModalInput id="username" label="Username" placeholder="" />
				<ModalInput id="password" label="Password" placeholder="" />
			</div>

			<div class="flex items-center justify-end">
				<button type="submit"
				        class="bg-black text-white rounded-md px-2 box-border py-1 hover:bg-[#27272a] transition-colors duration-200">
					Submit
				</button>
			</div>
		</form>
	</div>
</Modal>