import type { Role } from '$lib/components/shared/roles';
import { getFileMetaData } from './files-metadata';

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

export const roles: Role[] = ['ux-ui', 'frontend', 'backend', 'database'];

const storageUrl = 'browser/storage/hw26';

const getFileStatus = (date: Date): FileStatus => {
	const now = new Date();
	if (date <= now) return 'available';
	return 'locked';
};

const storageUrlBuilder = (role: (typeof roles)[number], fileName: string) => {
	return `/${storageUrl}/${role}/${fileName}`;
};

const weeklyClassDates: Date[][] = [
	[new Date('2026-03-07 09:30'), new Date('2026-03-07 13:00'), new Date('2026-03-08')],
	[new Date('2026-03-14 09:30'), new Date('2026-03-14 13:00'), new Date('2026-03-15')],
	[new Date('2026-03-21 09:00'), new Date('2026-03-21 13:00')]
];

export const getWeeklyClassDates = (weekIndex: number): Date[] => weeklyClassDates[weekIndex] ?? [];

export const files: FileItem[] = roles.flatMap((role) => {
	let classIndex = 0;
	return weeklyClassDates.flatMap((weekDates) =>
		weekDates.map((date) => {
			classIndex++;
			const id = `${role}-c${classIndex}`;
			const meta = getFileMetaData(id);

			return {
				id,
				title: `Class ${classIndex}`,
				kind: 'pdf',
				timeLabel: date.toDateString(),
				sizeLabel: meta?.size ?? '--',
				downloadUrl: meta ? storageUrlBuilder(role, meta.name) : '',
				role,
				sortDate: date,
				status: getFileStatus(date)
			};
		})
	);
});
