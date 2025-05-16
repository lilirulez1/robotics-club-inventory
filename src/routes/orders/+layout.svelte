<script lang="ts">
	import '../../app.css';
	import Navbar from "$lib/components/navbar/navbar.svelte";
    import Modal from '\$lib/components/modal/modal.svelte';
    import ModalInput from "../robots/modal-input.svelte";
    import {loggedIn} from "$lib/global-store";

    let { children, data } = $props();

    let show_modal = $state(false);

    let robot_team = $state('');
    let part_name = $state('');
    let part_link = $state('');
    let price = $state('');
    let qty = $state('');
    let urgency = $state('');
    let need_by_date = $state(false);
    let date_needed_by = $state('');
    let reason = $state('');
</script>

<Navbar class>
    <div class="flex items-center h-full grow">Orders</div>

    <button class="bg-black text-white rounded-md px-2 box-border py-1 hover:bg-[#27272a] transition-colors duration-200"
            onclick={() => (show_modal = true)}
    >
        New Order
    </button>
</Navbar>

<main class="p-4">
    {@render children()}
</main>

<Modal bind:show_modal={show_modal}>
    <div class="p-4 rounded-md border bg-white">
        <div class="font-bold">New Order</div>

        <form method="POST" action="?/add_order">
            <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-start gap-4">
                    <label class="leading-none text-right pt-2" for={"robot_team"}>Robot Team</label>
                    <select bind:value={robot_team} required class="flex w-full h-9 rounded-md bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground col-span-3" id={"robot_team"} name={"robot_team"}>
                        <option value="" disabled selected>Select your option</option>
                        {#each data.robot_teams as robot_team}
                            <option value={robot_team.robot_name}>{robot_team.robot_name}</option>
                        {/each}
                    </select>
                </div>

                <ModalInput label="Part Name" id="part_name" placeholder="5v DC Motor" bind:value={part_name} required />
                <ModalInput label="Part Link" id="part_link" placeholder="https://example.com/" bind:value={part_link} required />
                <div class="grid grid-cols-4 items-center gap-4">
                    <label class="leading-none text-right" for={"price"}>Price</label>
                    <div class="grid grid-cols-4 gap-2 col-span-3">
                        <input bind:value={price} required class="flex h-9 w-full col-span-3 rounded-md bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground" id={"price"} name={"price"} placeholder={"$50"} />
                        <input bind:value={qty} required class="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground" id={"qty"} name={"qty"} placeholder={"Qty"} />
                    </div>
                </div>

                <div class="grid grid-cols-4 items-start gap-4">
                    <label class="leading-none text-right pt-2" for={"urgency"}>Urgency</label>
                    <select bind:value={urgency} required class="flex w-full h-9 rounded-md bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground col-span-3" id={"urgency"} name={"urgency"}>
                        <option value="" disabled selected>Select your option</option>
                        <option value="urgent">Urgent</option>
                        <option value="want">Want</option>
                        <option value="need">Need</option>
                    </select>
                </div>

                <div class="grid grid-cols-4 items-start gap-4">
                    <div class="col-span-1"></div>
                    <div class="flex align-middle items-center gap-2">
                        <input id="need_by_date" name="need_by_date" type="checkbox" class="rounded" bind:checked={need_by_date} required />
                        <div>Need by date</div>
                    </div>
                </div>

                {#if need_by_date}
                    <ModalInput label="Date" id="date" placeholder="08/05" bind:value={date_needed_by} required />
                {/if}

                <div class="grid grid-cols-4 items-start gap-4">
                    <label class="leading-none text-right pt-2" for={"reason"}>Reason</label>
                    <textarea bind:value={reason} required class="flex w-full min-h-18 rounded-md bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground col-span-3" id={"reason"} name={"reason"} placeholder={"Reason"}></textarea>
                </div>
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