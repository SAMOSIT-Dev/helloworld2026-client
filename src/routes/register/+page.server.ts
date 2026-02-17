import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import type { Actions } from '@sveltejs/kit';
import {
	GOOGLE_SERVICE_ACCOUNT_EMAIL,
	GOOGLE_PRIVATE_KEY,
	GOOGLE_SHEET_ID
} from '$env/static/private';

export const actions: Actions = {
	register: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData) as Record<string, string>;
		const date = new Date();
		const thaiDate = date.toLocaleDateString('th-TH', {
			month: 'long',
			day: 'numeric',
			weekday: 'long',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});

		try {
			const serviceAccountAuth = new JWT({
				email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
				key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
				scopes: ['https://www.googleapis.com/auth/spreadsheets']
			});

			const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
			await doc.loadInfo();

			const sheet = doc.sheetsByIndex[0];

			await sheet.addRow({
				email: data.email || 'undefined',
				fullName: data.fullName || 'undefined',
				studentId: data.studentId || 'undefined',
				nickname: data.nickname || 'undefined',
				phone: data.phone || 'undefined',
				discord: data.discord || 'undefined',
				major: data.major || 'undefined',
				track: data.track || 'undefined',
				question_1: data.question_1 || 'undefined',
				question_2: data.question_2 || 'undefined',
				question_3: data.question_3 || 'undefined',
				question_4: data.question_4 || 'undefined',
				question_5: data.question_5 || 'undefined',
				date: thaiDate
			});

			return { success: true };
		} catch (error) {
			console.error('Error saving to Google Sheet:', error);
			return { success: false, message: 'Error Saving' };
		}
	}
};
