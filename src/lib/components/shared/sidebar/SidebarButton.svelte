<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { cn } from '$lib/utils/utility-util';
	import type { PageItem } from '../page-contents';

	export let href: Pathname;
	export let label: string;
	export let icon: PageItem['icon'];
	export let active: boolean = false;
</script>

<a
	href={resolve(href)}
	aria-current={active ? 'page' : undefined}
	data-sveltekit-preload-data="hover"
	class="block"
>
	<div
		class={cn(
			'block md:hidden',
			'flex items-center justify-center',
			'w-12 h-12 rounded-[100px] border-2 border-zinc-100',
			active ? 'bg-zinc-500' : 'bg-transparent'
		)}
	>
		<svelte:component this={icon} size={24} color="white" />
	</div>

	<div
		class={cn(
			'hidden md:block',
			'group relative h-10 w-52 rounded-[10px] transition-all duration-300 border',
			'hover:bg-stone-500 hover:border-neutral-200',
			active
				? 'bg-[radial-gradient(ellipse_144.65%_1272.11%_at_3.74%_20.00%,#484848_0%,#AEAEAE_76%,white_100%)] border-gray-200'
				: 'bg-zinc-700 border-neutral-400'
		)}
	>
		{#if active}
			<div
				class="w-0.75 h-5 bg-white rounded-md shadow-[0px_0px_11.699999809265137px_0px_rgba(255,255,255,0.50)] absolute left-0 top-1/2 -translate-y-1/2"
			></div>
		{/if}

		<div class="relative z-10 flex h-full items-center gap-3 pl-4">
			<svelte:component this={icon} size={20} color="white" />
			<span class="text-white text-xl font-semibold">
				{label}
			</span>
		</div>
	</div>
</a>
