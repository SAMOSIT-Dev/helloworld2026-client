import type { Role } from '$lib/components/shared/roles';

export type FileStatus = 'available' | 'locked' | 'missing';

export type FileItem = {
	id: string;
	title: string;
	kind: string;
	timeLabel: string;
	sizeLabel: string;
	downloadUrl: string;
	role: Role;
	sortDate: Date;
	status?: FileStatus;
	scheduleIds?: string[];
};

const roles: Role[] = ['ux-ui', 'frontend', 'backend', 'database'];

const kinds = ['pdf', 'png', 'sql', 'docx', 'zip', 'json'];
const statuses: FileStatus[] = ['available', 'locked', 'missing'];

const randomFrom = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const randomSize = () => {
	const size = (Math.random() * 5 + 0.5).toFixed(1);
	return `${size} MB`;
};

const randomDate = (index: number) => {
	const date = new Date(2024, 0, 1);
	date.setDate(date.getDate() + index * 3);
	return date;
};

export const files: FileItem[] = roles.flatMap((role, roleIndex) =>
	Array.from({ length: 10 }).map((_, i) => {
		const id = `${role}-${i + 1}`;
		const kind = randomFrom(kinds);
		const status = randomFrom(statuses);
		const sortDate = randomDate(roleIndex * 10 + i);

		return {
			id,
			title: `${role.toUpperCase()} File ${i + 1}`,
			kind,
			timeLabel: sortDate.toDateString(),
			sizeLabel: randomSize(),
			downloadUrl: `/files/${role}/${id}.${kind}`,
			role,
			sortDate,
			status,
			scheduleIds: [`schedule-${role}-${i + 1}`]
		};
	})
);
