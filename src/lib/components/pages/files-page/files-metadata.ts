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
		id: 'ux-ui-c4',
		name: 'IA, Flow, Wireframe & Prototype DAY3 CLASS 4.pdf',
		size: '1.8 MB'
	},
	{
		id: 'ux-ui-c5',
		name: 'UI Design Fundamentals DAY3 CLASS 5.pdf',
		size: '2.8 MB'
	},
	{
		id: 'ux-ui-c6',
		name: 'UI Design Intermediate DAY4 CLASS 6.pdf',
		size: '4.7 MB'
	},
	{
		id: 'ux-ui-c7',
		name: 'Understanding Human DAY5 CLASS 7.pdf',
		size: '1.2 MB'
	},
	{
		id: 'ux-ui-c8',
		name: 'Final Assignment DAY5 CLASS 8.pdf',
		size: '1.8 MB'
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
		id: 'frontend-c4',
		name: 'Javascript for Frontend Class4.pdf',
		size: '698.9 KB'
	},
	{
		id: 'frontend-c5',
		name: 'DOM Class5.pdf',
		size: '1.8 MB'
	},
	{
		id: 'frontend-c6',
		name: 'How to use backend with frontend Class6.pdf',
		size: '672.6 KB'
	},
	{
		id: 'frontend-c7',
		name: 'Introduction to Vue Class 7.pdf',
		size: '1.8 MB'
	},
	{
		id: 'frontend-c8',
		name: 'Introduction to Vue Class 8.pdf',
		size: '570.7 KB'
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
		size: '1.1 MB'
	},
	{
		id: 'backend-c4',
		name: 'Framework & App Structure 101 Class 4.pdf',
		size: '1.9 MB'
	},
	{
		id: 'backend-c5',
		name: 'Framework & App Structure 102 Class 5.pdf',
		size: '1.6 MB'
	},
	{
		id: 'backend-c6',
		name: 'Framework & App Structure 103 Class 6.pdf',
		size: '1.4 MB'
	},
	{
		id: 'backend-c7',
		name: 'Framework & App Structure 104 Class 7.pdf',
		size: '1.1 MB'
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
	},
	{
		id: 'database-c4',
		name: 'Normalization Class 4.pdf',
		size: '1.8 MB'
	},
	{
		id: 'database-c5',
		name: 'Data Dictionary Class 5.pdf',
		size: '1.5 MB'
	},
	{
		id: 'database-c6',
		name: 'PostgreSQL & DataGrip & DDL Class 6.pdf',
		size: '2.4 MB'
	},
	{
		id: 'database-c7',
		name: 'Database - DML Class 7.pdf',
		size: '5.3 MB'
	},
	{
		id: 'database-c8',
		name: 'SQL SELECT And JOIN Operation Class 8.pdf',
		size: '1.5 MB'
	}
];

export const getFileMetaData = (id: string): FileMeta | null =>
	filesMetadata.find((f) => f.id === id) ?? null;
