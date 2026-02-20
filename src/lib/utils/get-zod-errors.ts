import type { ZodError } from 'zod/v4';

export default function getZodErrors<T>(error: ZodError<T>) {
	const fieldErrors: Partial<Record<keyof T, string>> = {};
	for (const issue of error.issues) {
		const field = issue.path[0] as keyof T;
		if (field && !fieldErrors[field]) {
			fieldErrors[field] = issue.message;
		}
	}
	return fieldErrors;
}
