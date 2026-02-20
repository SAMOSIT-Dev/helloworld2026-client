<script lang="ts">
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import mobileScreenshotFrame from '$lib/assets/images/background/mobile-screenshot-frame.svg';
	import { fade } from 'svelte/transition';

	interface Props {
		sponsors: string[];
		currentIcon: number;
		carouselIcon: (dir: number) => void;
		icons: { name: string; icon: string; description: string; fontsize?: string; fontSizeMobile?: string; fontSizeTablet?: string }[];
	}

	let { sponsors, currentIcon, carouselIcon, icons }: Props = $props();
</script>

<section class="flex relative md:hidden bg-[#F6F7FB] flex-col overflow-hidden gap-[80px]">
	<div class=" w-full h-[120px] border-b-2 border-[#97A5DA] overflow-hidden">
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
	<div class="flex flex-col flex-1 px-[5%] w-full gap-[60px]">
		<div class="flex flex-col gap-[30px] mb-[40px]">
			<h1 class="text-[36px] font-Medium leading-none">Hello World คืออะไร?</h1>
			<p class="text-[16px] leading-[25px] w-full font-medium">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio, quae perferendis ducimus
				recusandae, dolores ex quibusdam voluptatem nihil laudantium cupiditate.
			</p>
		</div>
		<div class="flex-1 flex items-end justify-center">
			<div class="relative w-full max-w-[1200px]">
				<img src={mobileScreenshotFrame} class="w-full h-auto block" alt="screenshot-frame" />
				<div class="absolute inset-0 grid grid-cols-9">
					<div class="col-span-2"></div>
					<div class="col-span-3 pt-[25%] pl-[5%]">
						<p class="text-[20px] leading-[25px] text-white font-medium">
							{icons[currentIcon].description}
						</p>
					</div>
					<div class="col-span-4 flex items-center pl-[8%]">
						<div class="flex items-center justify-between w-full h-[70%]">
							<button onclick={() => carouselIcon(-1)} class=" ">
								<ChevronLeft size={30} color="#A7A7A7" />
							</button>
							<div class="relative h-[60%] aspect-square flex items-center justify-center">
								{#key currentIcon}
                                    <p in:fade={{ duration: 300 }} out:fade={{ duration: 300 }} class="absolute top-[-20px] left-0 right-0 text-center z-10 font-medium text-white {icons[currentIcon].fontSizeMobile}">
                                        {icons[currentIcon].name}
                                    </p>
									<img
										in:fade={{ duration: 300 }}
										out:fade={{ duration: 300 }}
										src={icons[currentIcon].icon}
										alt={icons[currentIcon].name}
										class="absolute h-full w-auto z-20"
									/>
								{/key}
							</div>
							<button onclick={() => carouselIcon(1)}>
								<ChevronRight size={30} color="#A7A7A7" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="absolute bottom-0 h-[40px] bg-[linear-gradient(to_top,#000000,transparent)] z-20 w-full"
	></div>
</section>
