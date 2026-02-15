import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classValue: ClassValue[]) {
	return twMerge(clsx(classValue));
}
