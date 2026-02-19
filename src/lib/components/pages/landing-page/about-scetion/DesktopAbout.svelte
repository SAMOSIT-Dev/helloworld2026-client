<script lang="ts">
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import screenshotFrame from '$lib/assets/images/background/screenshot-frame.svg';
	import { fade } from 'svelte/transition';

	interface Props {
		sponsors: string[];
		currentIcon: number;
		carouselIcon: (dir: number) => void;
		icons: {
			name: string;
			icon: string;
			description: string;
			fontsize?: string;
			fontSizeMobile?: string;
			fontSizeTablet?: string;
		}[];
	}

	let { sponsors, currentIcon, carouselIcon, icons }: Props = $props();
</script>

<section class="hidden md:flex h-screen bg-[#F6F7FB] flex-col relative overflow-hidden">
	<div class="absolute top-0 left-0 w-full h-[120px] border-b-2 border-[#97A5DA] overflow-hidden">
		<div class="marquee">
			<div class="marquee-track">
				{#each sponsors as sponsor}
					<span class="sponsor-text">{sponsor}</span>
				{/each}
				{#each sponsors as sponsor}
					<span class="sponsor-text">{sponsor}</span>
				{/each}
			</div>
		</div>
	</div>
	<div class="flex flex-col flex-1 pt-[200px] md:pt-[220px] px-[5%] max-w-[1440px] w-full mx-auto">
		<div class="flex flex-col gap-[40px] mb-[40px]">
			<h1 class="md:text-[96px] text-[48px] font-Medium leading-none">Hello World คืออะไร?</h1>
			<p class="text-[20px] leading-[25px] w-full md:w-[80%] font-medium">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio, quae perferendis ducimus
				recusandae, dolores ex quibusdam voluptatem nihil laudantium cupiditate.
			</p>
		</div>
		<div class="flex-1 flex items-end justify-center">
			<div class="relative w-full max-w-[1200px]">
				<img src={screenshotFrame} class="w-full h-auto block" alt="screenshot-frame" />
				<div class="absolute inset-0 grid grid-cols-9">
					<div class="col-span-2"></div>
					<div class="col-span-3 pt-[25%] pl-[5%]">
						<p class="text-[20px] leading-[25px] text-white font-medium">
							{icons[currentIcon].description}
						</p>
					</div>
					{#key currentIcon}
						<div class="col-span-4 flex items-end pl-[12%] pr-[3%]">
							<div class="flex items-center justify-between w-full h-[70%] relative">
								<p
									in:fade={{ duration: 300 }}
									out:fade={{ duration: 300 }}
									class="absolute top-0 left-0 right-0 text-center z-10 font-medium mt-[-70px] text-white [text-shadow:3px_0_#000,-3px_0_#000,0_3px_#000,0_-3px_#000,2px_2px_#000,-2px_2px_#000,2px_-2px_#000,-2px_-2px_#000] {icons[
										currentIcon
									].fontsize} {icons[currentIcon].fontSizeTablet}"
								>
									{icons[currentIcon].name}
								</p>
								<button onclick={() => carouselIcon(-1)}>
									<ChevronLeft
										size={40}
										class="text-[#A7A7A7] hover:scale-150 transition cursor-pointer"
									/>
								</button>
								<img
									in:fade={{ duration: 300 }}
									out:fade={{ duration: 300 }}
									src={icons[currentIcon].icon}
									alt={icons[currentIcon].name}
									class="h-full w-auto object-contain z-20"
								/>
								<button onclick={() => carouselIcon(1)}>
									<ChevronRight
										size={40}
										class="text-[#A7A7A7] hover:scale-150 transition cursor-pointer "
									/>
								</button>
							</div>
						</div>{/key}
				</div>
			</div>
		</div>
	</div>
	<div
		class="absolute bottom-0 h-[40px] bg-[linear-gradient(to_top,#000000,transparent)] z-20 w-full"
	></div>
</section>
