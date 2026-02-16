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

export const files: FileItem[] = [
	{
		id: '1',
		title: 'UI Kit - Buttons',
		kind: 'pdf',
		timeLabel: '15 Jan 2024',
		sizeLabel: '2.3 MB',
		downloadUrl: '/files/ux-ui/ui-kit-buttons.pdf',
		role: 'ux-ui',
		sortDate: new Date('2024-01-15T10:00:00Z'),
		status: 'available',
		scheduleIds: ['schedule1']
	},
	{
		id: '2',
		title: 'Frontend Architecture Diagram',
		kind: 'png',
		timeLabel: '20 Feb 2024',
		sizeLabel: '1.1 MB',
		downloadUrl: '/files/frontend/architecture-diagram.png',
		role: 'frontend',
		sortDate: new Date('2024-02-20T14:30:00Z'),
		status: 'locked',
		scheduleIds: ['schedule2']
	},
	{
		id: '3',
		title: 'Backend API Documentation',
		kind: 'pdf',
		timeLabel: '10 Mar 2024',
		sizeLabel: '5.4 MB',
		downloadUrl: '/files/backend/api-documentation.pdf',
		role: 'backend',
		sortDate: new Date('2024-03-10T09:15:00Z'),
		status: 'available',
		scheduleIds: ['schedule3']
	},
	{
		id: '4',
		title: 'Database Schema',
		kind: 'sql',
		timeLabel: '5 Apr 2024',
		sizeLabel: '800 KB',
		downloadUrl: '/files/database/schema.sql',
		role: 'database',
		sortDate: new Date('2024-04-05T11:45:00Z'),
		status: 'missing',
		scheduleIds: ['schedule4']
	}
];
