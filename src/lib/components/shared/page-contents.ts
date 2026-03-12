import type { Pathname } from '$app/types';
import type { IconProps } from '@lucide/svelte';
import { File, FlaskConical } from '@lucide/svelte';
import type { Component } from 'svelte';

export type PageItem = {
	title: string;
	description: string;
	href: Pathname;
	icon: Component<IconProps>;
	sidebar: boolean;
};

export const pageContents: PageItem[] = [
	{
		title: 'Files',
		description: 'สไลด์เนื้อหาการเรียนการสอนแยกตามสัปดาห์',
		href: '/files',
		icon: File,
		sidebar: true
	},
	{
		title: 'Quiz',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		href: '/quiz',
		icon: FlaskConical,
		sidebar: true
	}
];

export const isActivePath = (pathname: string, href: string) =>
	href === '/' ? pathname === '/' : pathname.startsWith(href);

export const getPageContent = (pathname: string) =>
	pageContents.find((item) => isActivePath(pathname, item.href));
