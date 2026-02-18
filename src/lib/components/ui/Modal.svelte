<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cn } from '$lib/utils/utility-util';
	import type { Snippet } from 'svelte';
	import { goto } from '$app/navigation';

	let {
		show = $bindable(false),
		title = '',
		children,
		footer,
		className = ''
	} = $props<{
		show: boolean;
		title?: string;
		children: Snippet;
		footer?: Snippet;
		className?: string;
	}>();

	// const close = () => {
	// 	show = false;
	// 	goto('/');
	// };
</script>

{#if show}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl"
		transition:fade={{ duration: 200 }}
		aria-hidden="true"
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class={cn(
				'w-full max-w-[900px] max-h-[90vh] mx-4',
				'flex flex-col rounded-[20px] border border-white/20',
				'bg-[#1e1e1e]/90 text-white p-6 shadow-2xl'
			)}
			transition:scale={{ start: 0.95, duration: 200 }}
			onclick={(e) => e.stopPropagation()}
		>
			{#if title}
				<h2 class="mb-5 text-lg font-semibold text-center">{title}</h2>
			{/if}

			<div
				class={cn(
					'flex-1 overflow-y-auto px-2 md:px-6 py-4 space-y-6 leading-relaxed custom-scrollbar',
					className
				)}
			>
				{@render children()}
			</div>

			{#if footer}
				<div class="mt-8 flex justify-center gap-4 font-semibold">
					{@render footer()}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
</style>
