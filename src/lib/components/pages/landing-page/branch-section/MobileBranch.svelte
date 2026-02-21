<script lang="ts">
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils/utility-util';

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
	let checkedIndex: number | null = $state(null);

	function isChecked(index: number | null) {
		return index === checkedIndex;
	}
</script>

<section
	id="branch-mobile"
	class="w-screen lg:hidden h-screen relative bg-black"
	style="scrollbar-width: none;"
>
	<div class="flex flex-col w-screen min-w-0 overflow-x-auto overflow-y-hidden">
		<div class="flex flex-row gap-4 px-4 py-0 w-max">
			{#each icons as icon, i}
				<label>
					<input
						type="radio"
						name="brnach-finder"
						onchange={() => (checkedIndex = i)}
						class="sr-only peer"
					/>
					<div
						class="relative overflow-hidden cursor-pointer flex flex-col justify-between items-center pt-10 w-[280px] h-screen"
					>
						<img
							src={icon.shadow}
							alt=""
							class={cn(
								'absolute top-0 left-1/2 w-full -translate-x-1/2 z-5 transition-opacity duration-500',
								isChecked(i) ? 'opacity-100' : 'opacity-0'
							)}
						/>
						<span
							class="absolute inset-0"
							style="background: radial-gradient(circle, #1a1a1a, #000000)"
						></span>
						<div
							class={cn(
								'absolute inset-0 transition-opacity duration-500',
								isChecked(i) ? 'opacity-100' : 'opacity-0'
							)}
							style="background: radial-gradient(circle at center, {icon
								.backgroundColors[2]} 0%, {icon.backgroundColors[1]} 76%, {icon
								.backgroundColors[0]} 100%)"
						></div>
						<p
							class={cn(
								'text-center font-bold text-16 z-20 px-[10%] h-[50px] text-[#313131]',
								isChecked(i) ? 'text-white' : 'text-[#313131]'
							)}
						>
							{isChecked(i) ? icon.messageHover : icon.message}
						</p>
						<p
							class={cn(
								'text-center font-bold text-[60px] z-20 px-[10%] leading-[0.8] bg-linear-to-b from-[#313131] to-[#2A2A2A] bg-clip-text text-transparent',
								icon.fontSizeXl,
								isChecked(i) ? 'from-[#FFFFFF] to-[#BFBFBF]' : 'from-[#313131] to-[#2A2A2A]'
							)}
						>
							{icon.name1}<br />{icon.name2}
						</p>
						<img
							src={icon.icon}
							alt={icon.name1 + ' ' + icon.name2}
							class={cn(
								'relative z-20 max-h-[70%] w-full',
								isChecked(i) ? 'brightness-100' : 'brightness-10'
							)}
						/>
					</div>
				</label>
			{/each}
		</div>
	</div>

	<!-- overlay title + button -->
	<div class="absolute inset-0 h-full w-full py-[100px] pointer-events-none lg:hidden z-40">
		<div class="flex flex-col items-center justify-between h-full">
			<p class="text-[48px] font-medium text-white z-100 text-center"></p>
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
		class="absolute bottom-0 left-0 h-auto z-10"
		style="width: max-content;"
	/>
</section>
