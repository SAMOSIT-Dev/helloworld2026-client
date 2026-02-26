import { closeForm } from '$lib/utils/utility-util';
import { error } from '@sveltejs/kit';

export const load = () => {
	if (closeForm()) {
		error(503, {
			message: 'ขออภัย ระบบปิดให้เข้าใช้งานแล้วจ้า'
		});
	}

	return {};
};
