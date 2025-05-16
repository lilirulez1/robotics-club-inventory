<script lang="ts">
    interface TableRow {
		robot_name: string;
		robot_hardware_type: string;
		box_number: string;
		students: {
			name: string;
			year_house: string;
        }[];
		competition_level: string;
        status: string;
    }

    let { table_data }: { table_data: TableRow[] } = $props();
</script>

<table>
    <thead>
        <tr>
            <th>Robot Name</th>
            <th>Hardware Type</th>
            <th>Box Number</th>
            <th>Members</th>
            <th>Year/House</th>
            <th>Competition Level</th>
            <th class="text-right">Status</th>
        </tr>
    </thead>
    <tbody>
    {#each table_data as row}
        <tr>
            <td> { row.robot_name }</td>
            <td class="text-nowrap overflow-ellipsis max-w-60 overflow-hidden whitespace-nowrap"> { row.robot_hardware_type }</td>
            <td> { row.box_number }</td>
            <td>
                <ul>
                    {#each row.students as student}
                        <li> { student.name } </li>
                    {/each}
                </ul>
            </td>
            <td>
                <ul>
                    {#each row.students as student}
                        <li> { student.year_house } </li>
                    {/each}
                </ul>
            </td>
            <td> { row.competition_level }</td>
            <td class="text-right"> { row.status }</td>
        </tr>
    {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr 2fr 1fr 1fr 1fr;
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
</style>