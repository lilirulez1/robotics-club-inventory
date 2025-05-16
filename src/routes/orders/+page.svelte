<script>
    import OrdersList from "./orders-list.svelte";
    let { data } = $props();
</script>

<OrdersList table_data={data.table_data} />