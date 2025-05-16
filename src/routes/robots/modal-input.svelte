<script lang="ts">
    let { id, label, placeholder, value = $bindable(), required = false } = $props();
</script>

<div class="grid grid-cols-4 items-center gap-4">
    <label class="leading-none text-right" for={id}>{label}</label>
    <input bind:value={value} required={required} class="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground col-span-3" id={id} name={id} placeholder={placeholder} />
</div>