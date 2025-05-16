<script>
    let { children, selected = false, onclick = () => {} } = $props();
</script>

<button
        aria-label="Button"
        class=" px-4 py-2 rounded-md inline-flex justify-start hover:underline {selected && 'bg-black text-white'} w-full"
        onclick={onclick}
>
    {@render children()}
</button>