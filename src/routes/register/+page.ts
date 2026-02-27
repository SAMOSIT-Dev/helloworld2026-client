import { closeForm } from '$lib/utils/utility-util';
import { error } from '@sveltejs/kit';

export const load = () => {
	if (closeForm()) {
		error(503, {
			message: 'ขออภัยในความไม่สะดวก เนื่องจากขณะนี้ระบบได้ปิดการลงทะเบียนแล้ว'
		});
	}

	return {};
};
