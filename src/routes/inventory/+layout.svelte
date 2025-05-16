<script lang="ts">
	import '../../app.css';
	import Navbar from "$lib/components/navbar/navbar.svelte";
    import ModalInput from "../robots/modal-input.svelte";
    import Modal from "\$lib/components/modal/modal.svelte";

	let { children } = $props();

    let show_modal = $state(false);

    let category = $state('');
</script>

<Navbar>
    <div class="flex items-center h-full grow">Inventory</div>

    <button class="bg-black text-white rounded-md px-2 box-border py-1 hover:bg-[#27272a] transition-colors duration-200"
            onclick={() => (show_modal = true)}
    >
        New Item
    </button>
</Navbar>

<main class="p-4">
    {@render children()}
</main>

<Modal bind:show_modal={show_modal}>
    <div class="p-4 rounded-md border bg-white">
        <div class="font-bold">Add Item</div>

        <form method="POST" action="?/add_item">
            <div class="grid gap-4 py-4">
                <ModalInput id="name" label="Name" placeholder="5v Buck Converter" />
                <ModalInput id="link" label="Link" placeholder="https://example.com/" />

                <div class="grid grid-cols-4 items-start gap-4">
                    <label class="leading-none text-right pt-2" for={"category"}>Category</label>
                    <input bind:value={category} required class="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground col-span-3" id={"category"} name={"category"} placeholder={"Voltage Regulator"} list="categories" />

                    <datalist id="categories">
                        <option value="Option 1">
                        <option value="Option 2">
                        <option value="Option 3">
                        <option value="Option 4">
                    </datalist>
                </div>

                <ModalInput id="location" label="Location" placeholder="Q28" />
                <ModalInput id="qty" label="Qty" placeholder="3" />
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