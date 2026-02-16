import { getRoleById, type Role } from '$lib/components/shared/roles';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const roleId = params.roleId as Role;
	const roleInfo = getRoleById(roleId);

	if (!roleInfo) throw error(404, 'ไม่พบหน้าที่คุณกำลังค้นหา');

	return roleInfo;
};
