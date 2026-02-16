import type { Role } from '$lib/components/shared/roles';

export type FileKind = 'pdf' | 'docx' | 'zip';
export type FileStatus = 'available' | 'locked' | 'missing';

export type FileItem = {
	id: string;
	role: Role;
	title: string;
	kind: FileKind;
	sizeLabel: string;
	path: string;
	availableFrom: Date;
	availableTo: Date;
	status?: FileStatus;
};

export type ComputedFileItem = FileItem & {
	computedStatus: FileStatus;
	downloadable: boolean;
};

const makePath = (role: Role, file: string) => `/files/${role}/${file}`;

const computeStatus = (file: FileItem, current = new Date()): ComputedFileItem => {
	if (file.status === 'missing') return { ...file, computedStatus: 'missing', downloadable: false };

	const inRange = current >= file.availableFrom && current <= file.availableTo;
	if (!inRange) return { ...file, computedStatus: 'locked', downloadable: false };

	return { ...file, computedStatus: 'available', downloadable: true };
};

const baseFiles: FileItem[] = [
	{
		id: 'ux-01',
		role: 'ux-ui',
		title: 'UI Kit - Buttons',
		kind: 'pdf',
		sizeLabel: '3.4 MB',
		path: makePath('ux-ui', 'ui-kit-buttons.pdf'),
		availableFrom: new Date(2025, 2, 12, 8, 0),
		availableTo: new Date(2025, 2, 12, 9, 0)
	},
	{
		id: 'ux-02',
		role: 'ux-ui',
		title: 'Prototype v2',
		kind: 'pdf',
		sizeLabel: '5.1 MB',
		path: makePath('ux-ui', 'prototype-v2.pdf'),
		availableFrom: new Date(2025, 2, 12, 9, 0),
		availableTo: new Date(2025, 2, 12, 10, 0)
	},
	{
		id: 'fe-01',
		role: 'frontend',
		title: 'File Card Component',
		kind: 'pdf',
		sizeLabel: '1.6 MB',
		path: makePath('frontend', 'file-card.pdf'),
		availableFrom: new Date(2025, 2, 14, 8, 0),
		availableTo: new Date(2025, 2, 14, 9, 0)
	},
	{
		id: 'fe-02',
		role: 'frontend',
		title: 'Routing Guards',
		kind: 'pdf',
		sizeLabel: '980 KB',
		path: makePath('frontend', 'routing-guards.pdf'),
		availableFrom: new Date(2025, 2, 14, 9, 0),
		availableTo: new Date(2025, 2, 14, 10, 0)
	},
	{
		id: 'db-02',
		role: 'database',
		title: 'Migration v1.3',
		kind: 'pdf',
		sizeLabel: '—',
		path: makePath('database', 'migration-v1-3.pdf'),
		availableFrom: new Date(2025, 2, 18, 9, 0),
		availableTo: new Date(2025, 2, 18, 10, 0),
		status: 'missing'
	}
];

export const files: ComputedFileItem[] = baseFiles.map((f) => computeStatus(f));

export const formatRangeLabel = (from: Date, to: Date, locale = 'en-GB') => {
	const d = new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'long' }).format(from);
	const start = new Intl.DateTimeFormat(locale, {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	}).format(from);
	const end = new Intl.DateTimeFormat(locale, {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	}).format(to);
	return `${d} [${start} - ${end}]`;
};
