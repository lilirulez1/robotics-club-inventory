<script lang="ts">
    interface TableRow {
        name: string;
        link: string;
        category: string;
        location: string;
        qty: string;
    }

    let { table_data }: { table_data: TableRow[] } = $props();
</script>

<table>
    <thead>
        <tr>
            <th>Item</th>
            <th class="text-center">Category</th>
            <th class="text-center">Location</th>
            <th class="text-right">Qty</th>
        </tr>
    </thead>
    <tbody>
    {#each table_data as row}
        <tr>
            <td>
                <a href={row.link}>
                    {row.name}
                </a>
            </td>
            <td class="text-center"> { row.category } </td>
            <td class="text-center"> { row.location } </td>
            <td class="text-right"> { row.qty } </td>
        </tr>
    {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    thead, tbody, tr {
        display: contents;
        text-align: left;
    }

    thead th {
        border-bottom: 1px solid black;
        padding-bottom: calc(var(--spacing) * 4);
    }

    tbody td {
        border-bottom: 1px solid #cccccc;
        padding: calc(var(--spacing) * 4) 0;
    }

    tbody tr:last-child td {
        border-bottom: none;
    }

    a {
        color: cornflowerblue;
        text-decoration: underline;
    }
</style>