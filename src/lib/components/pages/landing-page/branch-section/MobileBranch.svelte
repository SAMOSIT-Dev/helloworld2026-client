<script lang="ts">
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';

	interface Props {
		icons: {
			name1: string;
			name2: string;
			backgroundColors: string[];
			icon: string;
			message: string;
			messageHover: string;
			fontSizeXl: string;
			shadow: string;
			iconShadow: string;
		}[];
		dirtFloor: string;
	}

	let { icons, dirtFloor }: Props = $props();
	let hoveredIndex: number | null = $state(null);
</script>

<section
	id="branch-mobile"
	class="w-full lg:hidden h-screen relative bg-black overflow-x-auto overflow-y-hidden"
	style="scrollbar-width: none;"
>
	<div class="flex flex-row gap-4 px-4 py-0 w-max">
		{#each icons as icon, i}
			<div
				class="bg relative overflow-hidden cursor-pointer flex flex-col justify-between items-center pt-[40px] pb-[25%]"
				style="width: 280px; height: 100svh; flex-shrink: 0;"
			>
				<span class="absolute inset-0" style="background: radial-gradient(circle, #1a1a1a, #000000)"
				></span>
				<p class="text-center font-800 text-16 z-20 px-[10%] h-[50px] text-[#313131]">
					{icon.message}
				</p>

				<p
					class="text-center font-800 text-[60px] {icon.fontSizeXl} z-20 px-[10%] leading-[0.8] bg-linear-to-b from-[#313131] to-[#2A2A2A] bg-clip-text text-transparent"
				>
					{icon.name1}<br />{icon.name2}
				</p>
				<img
					src={icon.iconShadow}
					alt={icon.name1 + ' ' + icon.name2}
					class="relative z-10 max-h-[70%] w-full"
				/>
			</div>
		{/each}
	</div>

	<!-- overlay title + button -->
	<div class=" absolute inset-0 h-full w-full py-[100px] pointer-events-none lg:hidden z-100">
		<div class="flex flex-col items-center justify-between h-full">
			<p class="text-[48px] font-medium text-white z-100 text-center">สาขาภายในค่าย</p>
			<div class="flex flex-col gap-[20px] items-center pointer-events-auto">
				<p
					class="text-[32px] text-white font-medium drop-shadow-[0_4px_35px_rgba(0,0,0,0.7)] z-50 text-center"
				>
					ไม่รู้จะเลือกอันไหนดี?
				</p>
				<button
					onclick={() => goto('/quiz')}
					class="relative w-[280px] py-[16px] rounded-full border-2 text-white overflow-hidden border-[#E3E3E3] backdrop-blur-md cursor-pointer z-50"
				>
					<span
						class="absolute inset-0 [background:linear-gradient(to_bottom,#333333,#A8A8A8)] rounded-full opacity-50"
					></span>
					<span class="relative z-10 text-[20px] font-medium text-[#FFFFFF]">ลองทำแบบทดสอบ!</span>
				</button>
			</div>
		</div>
	</div>

	<img
		src={dirtFloor}
		alt="dirt floor"
		class="absolute bottom-40 left-0 h-auto z-30"
		style="width: max-content;"
	/>
</section>
