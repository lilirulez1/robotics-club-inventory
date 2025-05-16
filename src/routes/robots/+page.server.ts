import {CompetitionLevels, RobotHardwareTypes} from "$lib/constants";
import {redirect} from "@sveltejs/kit";

export const actions = {
	add_robot: async ({ request, fetch }) => {
		const form_data = await request.formData();

		const robot_name = form_data.get('robot_name');
		const robot_hardware_type = form_data.get('robot_hardware_type');
		const box_number = form_data.get('box_number');
		const robot_competition_level = form_data.get('competition_level');

		const students = [];
		let i = 0;
		while (form_data.has(`students[${i}][name]`)) {
			students.push({
				name: form_data.get(`students[${i}][name]`),
				year_house: form_data.get(`students[${i}][year_house]`)
			});
			i++;
		}

		const hardware_type = RobotHardwareTypes.find((type) => type.value == robot_hardware_type)?.label
		const competition_level = CompetitionLevels.find((level) => level.value == robot_competition_level)?.label

		const result = {
			robot_name,
			robot_hardware_type: hardware_type,
			box_number,
			competition_level,
			students,
			status: "Active"
		};

		const response = await fetch("/api/robots/new", {
			method: 'POST',
			body: JSON.stringify(result),
		});

		redirect(301, "/robots");
	}
};