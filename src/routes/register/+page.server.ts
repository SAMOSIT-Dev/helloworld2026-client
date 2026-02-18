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
				email: data.email || '',
				name: data.fullName || '',
				studentId: data.studentId || '',
				nickname: data.nickname || '',
				phone: data.phone || '',
				username: data.discord || '',
				major: data.major || '',
				track: `Treasure Hunter, ${data.track}`,
				question_1: data.question_1 || ' ',
				question_2: data.question_2 || ' ',
				question_3: data.question_3 || ' ',
				question_4: data.question_4 || ' ',
				question_5: data.question_5 || ' ',
				date: new Date()
			});

			return { success: true };
		} catch (error) {
			console.error('Error saving to Google Sheet:', error);
			return { success: false, message: 'Error Saving' };
		}
	}
};
