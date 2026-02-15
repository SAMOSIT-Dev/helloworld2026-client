<script lang="ts">
	import { cn } from '$lib/utils/utility-util';
	import VineLeft from '$lib/assets/images/decoration/VineLeft.png';
	import VineRight from '$lib/assets/images/decoration/VineRight.png';

	export let type: 'button' | 'submit' = 'button';
	export let variant: 'primary' | 'ghost' = 'primary';
	export let fun: () => void = () => {};
	export let className: string = '';
	export let isMobile: boolean = false;
</script>

<div
	class={cn(
		'inline-block rounded-full transition-transform duration-300 hover:-translate-y-1',

		variant === 'primary' && 'p-[3px] bg-gradient-to-b from-[#BB5B0D] via-[#673311] to-[#391D0C]',

		variant === 'ghost' && 'rounded-full',

		isMobile && 'rounded-full'
	)}
>
	<button
		on:click={fun}
		{type}
		class={cn(
			'relative inline-flex items-center justify-center',
			'rounded-full font-semibold',
			'px-8 py-3 w-[300px]',
			'transition-all duration-300',

			isMobile && 'w-12 h-12 p-0',

			// primary
			variant === 'primary' &&
				'bg-gradient-to-b from-[#F6DD54] via-[#EFC30A] to-[#E4910A] text-[#391D0C]',

			// ghost
			variant === 'ghost' && 'bg-transparent border-2 border-white/70 text-white hover:bg-white/10',

			// can overide class
			className
		)}
	>
		<!-- Desktop Decoration -->
		{#if variant === 'primary' && !isMobile}
			<img
				src={VineLeft}
				alt=""
				class="absolute -top-2 -left-2 w-[90px] pointer-events-none select-none"
			/>

			<img
				src={VineRight}
				alt=""
				class="absolute -top-6 -right-3 w-[70px] pointer-events-none select-none"
			/>
		{/if}

		<!-- Mobile Decoration -->
		{#if variant === 'primary' && isMobile}
			<img
				src={VineLeft}
				alt="vineMid"
				class="absolute -top-1 -left-1 w-10 h-12 pointer-events-none select-none"
			/>
		{/if}

		<!-- Content -->
		<span class="relative z-10">
			<slot />
		</span>
	</button>
</div>
