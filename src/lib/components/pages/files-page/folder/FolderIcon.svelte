<script lang="ts">
	import baseFolderRaw from '$lib/assets/images/files-page/base-folder.svg?raw';
	import baseFolderHoverRaw from '$lib/assets/images/files-page/base-folder_hover.svg?raw';
	import { cn } from '$lib/utils/utility-util';
	import { Spring } from 'svelte/motion';

	type Props = {
		color?: string;
		className?: string;
		alt?: string;
	};

	const { color = '#36BC9B', className = '', alt = 'Folder' }: Props = $props();

	let isHovered = $state(false);

	const tint = (svg: string) =>
		svg
			.replaceAll('fill="#36BC9B"', 'fill="currentColor"')
			.replaceAll('stroke="#36BC9B"', 'stroke="currentColor"');

	const baseSvg = $derived(tint(baseFolderRaw));
	const hoverSvg = $derived(tint(baseFolderHoverRaw));

	const spring = new Spring(0, { stiffness: 320, damping: 24 });
	const p = $derived(spring.current);

	$effect(() => {
		spring.set(isHovered ? 1 : 0);
	});
</script>

<div
	class={cn('relative inline-block select-none', className)}
	style={`color:${color};`}
	role="img"
	aria-label={alt}
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
>
	<span
		class="absolute inset-0 pointer-events-none will-change-[opacity,transform] svg-fit"
		style={`opacity:${1 - p}; transform:scale(${1 - 0.02 * p});`}
		aria-hidden="true"
	>
		{@html baseSvg}
	</span>

	<span
		class="absolute inset-0 pointer-events-none will-change-[opacity,transform] svg-fit"
		style={`opacity:${p}; transform:scale(${0.98 + 0.02 * p});`}
		aria-hidden="true"
	>
		{@html hoverSvg}
	</span>

	<span class="block opacity-0 pointer-events-none svg-fit" aria-hidden="true">
		{@html baseSvg}
	</span>
</div>

<style>
	.svg-fit :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
