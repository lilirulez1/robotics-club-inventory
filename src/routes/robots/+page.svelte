<script>
    import RobotsList from "./robots-list.svelte";
    let { data } = $props();
</script>

<RobotsList table_data={data.table_data} />

