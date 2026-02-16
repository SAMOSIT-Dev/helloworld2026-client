<script lang="ts">
	import { cn } from '$lib/utils/utility-util';
	import FolderIcon from './FolderIcon.svelte';

	type Props = {
		label: string;
		color?: string;
		className?: string;
	};

	const { color, label, className = '' }: Props = $props();
</script>

<button
	type="button"
	class={cn('group relative flex flex-col items-center justify-start', 'rounded-2xl', className)}
>
	<FolderIcon {color} className="cursor-pointer size-37 md:size-50" />

	<span
		class="text-center justify-start text-white text-base font-medium font-['Inter'] [text-shadow:0px_4px_19px_rgb(0_0_0/0.64)]"
	>
		{label}
	</span>
</button>
