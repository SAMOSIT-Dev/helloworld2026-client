<script lang="ts">
	import { cn } from '$lib/utils/utility-util';
	import VineLeft from '$lib/assets/images/decoration/VineLeft.png';
	import VineRight from '$lib/assets/images/decoration/VineRight.png';
	import type { Snippet } from 'svelte';

	const {
		type = 'button',
		variant = 'primary',
		fun = () => {},
		className = '',
		isMobile = false,
		decoration = true,
		children,
		disabled = false
	} = $props<{
		type?: 'button' | 'submit';
		variant?: 'primary' | 'ghost';
		disabled?: boolean;
		fun?: () => void;
		className?: string;
		isMobile?: boolean;
		decoration?: boolean;
		children?: Snippet;
	}>();
</script>

<div
	class={cn(
		'inline-block rounded-full transition-transform duration-300 hover:-translate-y-1 w-auto',
		variant === 'primary' && 'p-[3px] bg-gradient-to-b from-[#BB5B0D] via-[#673311] to-[#391D0C]',
		(variant === 'ghost' || isMobile) && 'rounded-full'
		// className
	)}
>
	<button
		onclick={fun}
		{type}
		{disabled}
		class={cn(
			'relative inline-flex items-center justify-center transition-all duration-300 w-full',
			'rounded-full font-semibold px-8 py-3',
			'cursor-pointer',
			'disabled:opacity-50 disabled:cursor-not-allowed',
			isMobile && 'w-12 h-12 p-0',
			variant === 'primary' &&
				'bg-gradient-to-b from-[#F6DD54] via-[#EFC30A] to-[#E4910A] text-[#391D0C]',
			variant === 'ghost' && 'bg-transparent border-2 border-white/70 text-white hover:bg-white/10',
			className
		)}
	>
		{#if variant === 'primary' && decoration}
			{#if !isMobile}
				<img
					src={VineLeft}
					alt=""
					class="absolute -top-2 -left-2 w-[60px] md:w-[90px] pointer-events-none select-none"
				/>
				<img
					src={VineRight}
					alt=""
					class="absolute -top-6 -right-3 w-[60px] md:w-[70px] pointer-events-none select-none"
				/>
			{:else}
				<img
					src={VineLeft}
					alt="vineMid"
					class="absolute -top-1 -left-1 w-10 h-12 pointer-events-none select-none"
				/>
			{/if}
		{/if}

		{#if children}
			{@render children()}
		{/if}
	</button>
</div>
