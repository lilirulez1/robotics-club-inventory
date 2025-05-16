<script>
    import InventoryList from "./inventory-list.svelte";
    let { data } = $props();
</script>

<InventoryList table_data={data.table_data} />