type Route = {
	name: string;
	url: string;
};

export const routes: Route[] = [
	{
		name: "Robot Allocations",
		url: "/robots",
	},
	{
		name: "Inventory",
		url: "/inventory",
	},
	{
		name: "Orders",
		url: "/orders",
	},
];

export interface RobotTeam {
	robot_name: string;
	robot_type: string;
	box_number?: string;
	students: [{ name: string; year_level: string }];
	competition_level: string;
	status: string;
}

export interface Order {
	robot_team: string;
	part_name: string;
	part_link: string;
	price: string;
	qty: string;
	urgency: string;
	need_by_date: boolean;
	date_needed_by: string;
	reason: string;
}

export interface InventoryItem {
	name: string;
	link: string;
	category: string;
	location: string;
	qty: string;
}

export const RobotHardwareTypes = [
	{ value: "arduino-conventional", label: "Arduino - Conventional" },
	{ value: "arduino-raspberry-pi-hybrid-conventional", label: "Arduino/Raspberry Pi Hybrid - Conventional" },
	{ value: "arduino-raspberry-pi-hybrid-vision-sensing", label: "Arduino/Raspberry Pi Hybrid - Vision Sensing" },
	{ value: "arduino-vision-sensing", label: "Arduino - Vision Sensing" },
	{ value: "lego-arduino-hybrid", label: "Lego/Arduino Hybrid" },
	{ value: "lego-ev3", label: "Lego EV3" },
	{ value: "lego-nxt", label: "Lego NXT" },
	{ value: "lego-raspberry-pi-hybrid", label: "Lego/Raspberry Pi Hybrid" },
	{ value: "lego-spike-prime", label: "Lego Spike Prime" },
	{ value: "mbot", label: "MBot" },
	{ value: "raspberry-pi-conventional", label: "Raspberry Pi - Conventional" },
	{ value: "raspberry-pi-vision-sensing", label: "Raspberry Pi - Vision Sensing" },
	{ value: "other", label: "Other" }
];

export const CompetitionLevels = [
	{ value: "primary", label: "Primary" },
	{ value: "secondary", label: "Secondary" },
];

export const Urgency = [
	{ value: "urgent", label: "Urgent" },
	{ value: "want", label: "Want" },
	{ value: "need", label: "Need" },
]