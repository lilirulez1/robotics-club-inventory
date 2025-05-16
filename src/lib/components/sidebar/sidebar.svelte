<script>
    let { children } = $props();
</script>

<div class="border-r w-64 min-w-64 p-4">
    <nav class="flex flex-col h-full">
        {@render children()}
    </nav>
</div>