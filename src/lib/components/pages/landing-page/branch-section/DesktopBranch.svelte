<script lang="ts">
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

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

	let sectionEl: HTMLElement;
	let progress = 0;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				progress = entry.intersectionRatio;
			},
			{
				threshold: Array.from({ length: 101 }, (_, i) => i / 100)
			}
		);

		if (sectionEl) observer.observe(sectionEl);

		return () => observer.disconnect();
	});
</script>

<p
	class="text-[45px] p-10 text-white md:text-[96px] md:font-medium z-50 text-center md:p-6 bg-black"
>
	สาขาภายในค่าย
</p>

<section
	bind:this={sectionEl}
	id="branch"
	class="w-full hidden lg:grid lg:h-[1000px] xl:h-screen relative px-10 bg-black grid-cols-4 gap-[60px] xl:gap-[100px] overflow-hidden"
>
	{#each icons as icon, i}
		<div
			role="button"
			tabindex="0"
			onmouseenter={() => (hoveredIndex = i)}
			onmouseleave={() => (hoveredIndex = null)}
			onfocus={() => (hoveredIndex = i)}
			onblur={() => (hoveredIndex = null)}
			class="bg relative overflow-hidden group cursor-pointer h-full flex flex-col justify-between items-center pt-[40px] pb-[25%]"
		>
			<img
				src={icon.shadow}
				alt=""
				class="absolute top-0 left-1/2 w-full -translate-x-1/2 z-5 group-hover:opacity-100 opacity-0 transition-opacity duration-500"
			/>
			<span
				class="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
				style="background: radial-gradient(circle, #1a1a1a, #000000)"
			></span>
			<div
				class="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
				style="background: radial-gradient(circle at center, 
      {icon.backgroundColors[2]} 0%, 
      {icon.backgroundColors[1]} 76%, 
      {icon.backgroundColors[0]} 100%)"
			></div>
			{#key hoveredIndex === i}
				<p
					in:fade={{ duration: 300 }}
					class="text-center font-bold text-16 z-20 px-[10%] h-[60px] {hoveredIndex === i
						? 'text-[#FFFFFF]'
						: 'text-[#313131]'}"
				>
					{hoveredIndex === i ? icon.messageHover : icon.message}
				</p>
			{/key}
			<p
				class="text-center font-bold md:text-[60px] {icon.fontSizeXl}  z-20 px-[10%] leading-[0.8] bg-linear-to-b group-hover:from-[#FFFFFF] group-hover:to-[#BFBFBF] from-[#313131] to-[#2A2A2A] bg-clip-text text-transparent transition-colors duration-500"
			>
				{icon.name1}<br />{icon.name2}
			</p>
			<img
				src={icon.icon}
				alt={icon.name1 + ' ' + icon.name2}
				class="relative z-10 xl:max-h-[70%] w-full transition duration-500
	{hoveredIndex === i ? 'brightness-100' : 'brightness-10'}"
			/>
		</div>
	{/each}
	<div class="absolute inset-0 h-full w-full py-[150px]">
		<div class="flex flex-col items-center justify-between h-full">
			<p class="text-[96px] font-medium text-white z-50"></p>
			<div class="flex flex-col gap-[30px] items-center">
				<p class="text-[64px] text-white font-medium drop-shadow-[0_4px_35px_rgba(0,0,0,0.7)] z-50">
					ไม่รู้จะเลือกอันไหนดี?
				</p>
				<button
					onclick={() => goto('/quiz')}
					class="relative w-[80%] md:w-[60%] max-w-[450px] py-[18px] md:py-[24px] rounded-full border-2 text-white overflow-hidden border-[#E3E3E3] backdrop-blur-md cursor-pointer z-50"
				>
					<span
						class="absolute inset-0 [background:linear-gradient(to_bottom,#333333,#A8A8A8)] rounded-full opacity-50"
					></span>
					<span class="relative z-10 text-[20px] md:text-[30px] font-medium text-[#FFFFFF]"
						>ลองทำแบบทดสอบ!</span
					>
				</button>
			</div>
		</div>
	</div>
	<img src={dirtFloor} alt="dirt floor" class="absolute bottom-[-50px] left-0 w-full h-auto z-30" />
</section>
