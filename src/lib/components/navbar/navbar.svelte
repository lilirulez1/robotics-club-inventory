<script>
    let { children, class: className } = $props();
</script>

<div class={className + " flex border-b p-4 flex-shrink-0"}>
    {@render children()}
</div>