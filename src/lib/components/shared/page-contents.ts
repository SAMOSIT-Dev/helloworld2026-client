import type { Pathname } from '$app/types';
import filesIcon from '$lib/assets/images/sidebar/icons/files.svg';
import quizIcon from '$lib/assets/images/sidebar/icons/quiz.svg';
import scheduleIcon from '$lib/assets/images/sidebar/icons/schedule.svg';

export type PageItem = {
	title: string;
	description: string;
	href: Pathname;
	icon: string;
	sidebar: boolean;
};

export const pageContents: PageItem[] = [
	{
		title: 'Schedule',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		href: '/',
		icon: scheduleIcon,
		sidebar: true
	},
	{
		title: 'Files',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		href: '/files',
		icon: filesIcon,
		sidebar: true
	},
	{
		title: 'Quiz',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		href: '/quiz',
		icon: quizIcon,
		sidebar: true
	}
];

export const isActivePath = (pathname: string, href: string) =>
	href === '/' ? pathname === '/' : pathname.startsWith(href);

export const getPageContent = (pathname: string) =>
	pageContents.find((item) => isActivePath(pathname, item.href));
