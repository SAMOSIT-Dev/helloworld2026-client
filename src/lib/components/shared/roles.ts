export const roleIds = ['ux-ui', 'frontend', 'backend', 'database'] as const;
export type Role = (typeof roleIds)[number];

export const roles = [
	{ id: 'ux-ui', name: 'UX/UI', color: '#36BC9B' },
	{ id: 'frontend', name: 'Frontend', color: '#F6BB43' },
	{ id: 'backend', name: 'Backend', color: '#DB4453' },
	{ id: 'database', name: 'Database', color: '#4B89DC' }
];

export const getRoleById = (id: Role) => roles.find((role) => role.id === id);
