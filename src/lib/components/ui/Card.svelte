<script lang="ts">
	import { cn } from '$lib/utils/utility-util';
	import type { HTMLAttributes } from 'svelte/elements';

	let { class: className = '', children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	{...rest}
	class={cn(
		'bg-neutral-600 rounded-[10px] border border-neutral-400 p-5 hover:bg-stone-500 hover:border-neutral-200 transition',
		className
	)}
>
	{@render children?.()}
</div>
