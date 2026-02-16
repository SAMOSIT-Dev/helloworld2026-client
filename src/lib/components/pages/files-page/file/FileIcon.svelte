<script lang="ts">
	import baseFileRaw from '$lib/assets/images/files-page/base-file.svg?raw';
	import lockFileRaw from '$lib/assets/images/files-page/lock-file.svg?raw';
	import missingFileRaw from '$lib/assets/images/files-page/missing-file.svg?raw';
	import { cn } from '$lib/utils/utility-util';
	import type { FileStatus } from '../files';

	type Props = {
		alt?: string;
		color?: string;
		kind?: string;
		status?: FileStatus;
		className?: string;
	};

	const {
		alt,
		color = '#36BC9B',
		kind = 'pdf',
		status = 'available',
		className = ''
	}: Props = $props();

	const tint = (svg: string) =>
		svg
			.replaceAll('fill="#36BC9B"', 'fill="currentColor"')
			.replaceAll('stroke="#36BC9B"', 'stroke="currentColor"');

	const escapeText = (s: string) =>
		s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

	const buildBaseWithText = (label: string) => {
		const text = escapeText(label.slice(0, 5).toUpperCase());

		const cleaned = baseFileRaw
			.replace(/<rect[\s\S]*?\/>/g, '')
			.replace(/<rect[\s\S]*?<\/rect>/g, '')
			.replace(/<path d="M11[\s\S]*?<\/path>/g, '');

		const textLayer = `
<rect y="48.3334" width="58" height="38.6667" rx="10" fill="currentColor"/>
<text x="29" y="72" text-anchor="middle" font-size="16" font-weight="700" fill="white" font-family="Inter, sans-serif">${text}</text>
`;

		return cleaned.replace('</svg>', `${textLayer}</svg>`);
	};

	const svg = $derived.by(() => {
		if (status === 'missing') return tint(missingFileRaw);
		if (status === 'locked') return tint(lockFileRaw);
		return tint(buildBaseWithText(kind));
	});

	const computedAlt = $derived.by(
		() =>
			alt ??
			(status === 'missing'
				? 'Missing file'
				: status === 'locked'
					? 'Locked file'
					: `${kind.toUpperCase()} file`)
	);
</script>

<div
	class={cn('relative inline-block select-none', className)}
	style={`color:${color};`}
	role="img"
	aria-label={computedAlt}
>
	{@html svg}
</div>
