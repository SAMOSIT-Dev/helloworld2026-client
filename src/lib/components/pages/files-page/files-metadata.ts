export type FileMeta = {
	id: string;
	name: string;
	size: string;
};

export const filesMetadata: FileMeta[] = [
	{
		id: 'ux-ui-c1',
		name: 'UXUI Design DAY 1 CLASS 1.pdf',
		size: '7.4 MB'
	},
	{
		id: 'ux-ui-c2',
		name: 'UXUI Design DAY 1 CLASS 2.pdf',
		size: '2.4 MB'
	},
	{
		id: 'ux-ui-c3',
		name: 'UXUI Design DAY 2 CLASS 3.pdf',
		size: '2.8 MB'
	},
	{
		id: 'frontend-c1',
		name: 'Introduction to frontend Class1.pdf',
		size: '2.0 MB'
	},
	{
		id: 'frontend-c2',
		name: 'HTML + CSS Class2.pdf',
		size: '1.8 MB'
	},
	{
		id: 'frontend-c3',
		name: 'CSS Framework Class3.pdf',
		size: '717.6 KB'
	},
	{
		id: 'backend-c1',
		name: 'Programming Fundamental 101 Class1.pdf',
		size: '2.2 MB'
	},
	{
		id: 'backend-c2',
		name: 'Programming Fundamental 102 Class2.pdf',
		size: '1.1 MB'
	},
	{
		id: 'backend-c3',
		name: 'SQL 101 Class3.pdf',
		size: '1.1MB'
	},
	{
		id: 'database-c1',
		name: 'Database Fundamentals Class1.pdf',
		size: '3.1 MB'
	},
	{
		id: 'database-c2',
		name: 'Business Requirement Class2.pdf',
		size: '961.9 KB'
	},
	{
		id: 'database-c3',
		name: 'Entity & Attribute Class3.pdf',
		size: '991.2 KB'
	}
];

export const getFileMetaData = (id: string): FileMeta | null =>
	filesMetadata.find((f) => f.id === id) ?? null;
