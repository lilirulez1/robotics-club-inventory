<script lang="ts">
	import '../../app.css';
	import Navbar from "$lib/components/navbar/navbar.svelte";
	import Modal from "$lib/components/modal/modal.svelte";
	import ModalInput from './modal-input.svelte';
	import {CompetitionLevels, RobotHardwareTypes} from "$lib/constants";
	import {loggedIn} from "$lib/global-store";

	let { children } = $props();

	let show_modal = $state(false);

	let robot_name = $state('');
	let robot_hardware_type = $state('');
	let box_number = $state('');
	let competition_level = $state('');
	let students = $state([{ year_house: '', name: '' }]);

	function add_student() {
		students.push({ year_house: '', name: '' });
	}

	function remove_student(index: number) {
		students.splice(index, 1);
	}
</script>

<Navbar class>
	<div class="flex items-center h-full grow">Robot Allocations</div>

	{#if $loggedIn}
		<button class="bg-black text-white rounded-md px-2 box-border py-1 hover:bg-[#27272a] transition-colors duration-200"
		        onclick={() => (show_modal = true)}
		>
			Add Robot
		</button>
	{/if}
</Navbar>

<main class="p-4 grow overflow-scroll">
	{@render children()}
</main>

<Modal bind:show_modal>
	<div class="p-4 rounded-md border bg-white">
		<div class="font-bold">Add Robot</div>

		<form method="POST" action="?/add_robot">
			<div class="grid gap-4 py-4">
				<ModalInput label="Robot Name" id="robot_name" placeholder="Robot Name" bind:value={robot_name} required />

				<div class="grid grid-cols-4 items-start gap-4">
					<label class="leading-none text-right pt-2" for={"robot_hardware_type"}>Hardware Type</label>
					<select bind:value={robot_hardware_type} required class="flex w-full h-9 rounded-md bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground col-span-3" id={"robot_hardware_type"} name={"robot_hardware_type"}>
						<option value="" disabled selected>Select your option</option>
						{#each RobotHardwareTypes as robot_hardware_type}
							<option value={robot_hardware_type.value}>{robot_hardware_type.label}</option>
						{/each}
					</select>
				</div>

				<ModalInput label="Box Number" id="box_number" placeholder="LM06" bind:value={box_number} />

				<div class="grid grid-cols-4 items-start gap-4">
					<label class="leading-none text-right pt-2" for={"competition_level"}>Competition Level</label>
					<select bind:value={competition_level} required class="flex w-full h-9 rounded-md bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground col-span-3" id={"competition_level"} name={"competition_level"}>
						<option value="" disabled selected>Select your option</option>
						{#each CompetitionLevels as competition_level}
							<option value={competition_level.value}>{competition_level.label}</option>
						{/each}
					</select>
				</div>

				<div class="grid grid-cols-4 items-start gap-4">
					<div class="leading-none text-right pt-2">Students</div>
					<div class="col-span-3 border rounded-md bg-transparent">
						{#each students as student, index}
							<div class="grid grid-cols-5 items-center">
								<input id={"student-name-" + (index + 1)}
								       name={`students[${index}][name]`}
								       placeholder={"Full Name"}
								       bind:value={student.name}
								       class="flex col-span-4 h-9 w-full bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground border-0 border-b border-r"
								       required
								/>
								<input id={"student-year_house-" + (index + 1)}
								       name={`students[${index}][year_house]`}
								       placeholder={"10B"}
								       bind:value={student.year_house}
								       class="flex h-9 bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground border-0 border-b"
								       required
								/>
							</div>
						{/each}

						<div class="flex">
							<button type="button"
							        class="flex items-center justify-center w-6 h-6 border-0 border-r"
							        onclick={add_student}>
								+
							</button>
							<button type="button"
							        class="flex items-center justify-center w-6 h-6 border-0 border-r"
							        onclick={() => remove_student(-1)}>
								-
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class="flex items-center justify-end">
				<button type="submit"
				        class="bg-black text-white rounded-md px-2 box-border py-1 hover:bg-[#27272a] transition-colors duration-200">
					Submit
				</button>
			</div>
		</form>
	</div>
</Modal>
