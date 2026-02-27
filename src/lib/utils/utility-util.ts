import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classValue: ClassValue[]) {
	return twMerge(clsx(classValue));
}

export const closeForm = () => {
	const now = new Date();
	const closeDate = new Date('2026-02-27T23:59:00');
	return now > closeDate;
};
