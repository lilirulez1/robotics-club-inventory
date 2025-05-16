<script lang="ts">
	import {type Order, Urgency} from "$lib/constants";

	let { table_data }: { table_data: Order[] } = $props();

	let dropdown_menu_x = $state(0);
	let dropdown_menu_y = $state(0);
	let show_dropdown = $state(false);
</script>

<table>
	<thead>
	<tr>
		<th>Robot Team</th>
		<th>Part Name</th>
		<th>Urgency</th>
		<th>Price</th>
		<th>Qty</th>
		<th></th>
	</tr>
	</thead>
	<tbody>
	{#each table_data as row}
		<tr class="group hover:bg-gray-100">
			<td class="group-hover:bg-gray-50"> {row.robot_team} </td>
			<td class="group-hover:bg-gray-50">
				<a href={row.part_link}>{row.part_name}</a>
			</td>
			<td class="group-hover:bg-gray-50">
				{Urgency.find((value) => value.value === row.urgency)?.label}
			</td>
			<td class="group-hover:bg-gray-50"> {row.price} </td>
			<td class="group-hover:bg-gray-50"> {row.qty} </td>
			<td class="group-hover:bg-gray-50 pr-2">
				<button class="rounded-md hover:bg-gray-200 transition-colors duration-100 p-1" aria-label="menu" onclick={(e) => { show_dropdown = true; }}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
						<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
					</svg>
				</button>
			</td>
		</tr>
	{/each}
	</tbody>
</table>

{#if show_dropdown}
	<div id="context-menu"
	     class="absolute"
	     style={`top: ${dropdown_menu_y}px; left: ${dropdown_menu_x}px;`}
	>
		<p>Hello, World!</p>
	</div>
{/if}

<style>
    table {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr .2fr;
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