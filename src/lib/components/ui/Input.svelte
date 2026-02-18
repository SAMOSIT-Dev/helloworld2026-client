<script lang="ts">
	import { cn } from '$lib/utils/utility-util';
	import type { Snippet } from 'svelte';
	import { v7 as UUID } from 'uuid';

	let {
		label = '',
		placeholder = '',
		value = $bindable(''),
		error = '',
		className = '',
		onblur,
		icon
	} = $props<{
		label?: string;
		placeholder?: string;
		value?: string;
		error?: string;
		className?: string;
		onblur?: () => void;
		icon?: Snippet;
	}>();

	const id = UUID();
</script>

<div class="flex flex-col w-full">
	{#if label}
		<label for={id} class="block text-start mb-1 text-lg font-semibold text-white">
			{label}
		</label>
	{/if}

	<div
		class={cn(
			'group flex items-stretch w-full border-2 h-[65px] rounded-[25px] overflow-hidden transition-all duration-200',
			error
				? 'border-red-500 focus-within:ring-2 focus-within:ring-red-400'
				: 'border-gray-300 focus-within:ring-2 focus-within:ring-[#EFC30A] focus-within:border-[#EFC30A]',
			className
		)}
	>
		{#if icon}
			<div class="flex items-center px-4 relative">
				<div class="absolute top-3 bottom-3 right-0 w-[1px] bg-gray-300 opacity-40"></div>
				{@render icon()}
			</div>
		{/if}

		<input
			{id}
			bind:value
			{onblur}
			{placeholder}
			class="flex-1 px-4 py-2 bg-transparent focus:outline-none placeholder:opacity-40"
		/>
	</div>

	{#if error}
		<p class="mt-1 text-sm text-red-500">{error}</p>
	{/if}
</div>
