<script lang="ts">
	let { show_modal = $bindable(), children } = $props();

	let dialog = $state<HTMLDialogElement>();

	$effect(() => {
		if (show_modal) dialog?.showModal();
		if (!show_modal) dialog?.close();
	});
</script>

<dialog
		bind:this={dialog}
		onclose={() => (show_modal = false)}
		onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
	{@render children()}
</dialog>

<style>
    dialog {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
        max-width: 40rem;
        background: #eee;
    }
</style>