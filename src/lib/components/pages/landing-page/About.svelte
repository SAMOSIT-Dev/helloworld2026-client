<script lang="ts">
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import screenshotFrame from '$lib/assets/images/background/screenshot-frame.svg';
	import uxuiIcon from '$lib/assets/images/branch/uxui-icon.svg';
	import databaseIcon from '$lib/assets/images/branch/database-icon.svg';
	import frontendIcon from '$lib/assets/images/branch/frontend-icon.svg';
	import backendIcon from '$lib/assets/images/branch/backend-icon.svg';
	import { fade } from 'svelte/transition';

	let currentIcon = $state(0);

	const icons: { name: string; icon: string; description: string }[] = [
		{ name: 'UX/UI', icon: uxuiIcon, description: 'UX UI description demo test' },
		{ name: 'Database', icon: databaseIcon, description: 'Database description demo test' },
		{ name: 'Frontend', icon: frontendIcon, description: 'Frontend description demo test' },
		{ name: 'Backend', icon: backendIcon, description: 'Backend description demo test' }
	];
    
    const sponsors = ['SPONSOR1', 'SPONSOR2', 'SPONSOR3', 'SPONSOR4', 'SPONSOR5', 'SPONSOR6', 'SPONSOR7', 'SPONSOR8'];

	const carouselIcon = (dir: number) => {
		currentIcon = (currentIcon + dir + icons.length) % icons.length;
	};
</script>

<section class="h-screen bg-[#F6F7FB] flex flex-col relative overflow-hidden">
	<div class="absolute top-0 left-0 w-full h-[60px] md:h-[120px] border-b-2 border-[#97A5DA] overflow-hidden" >
		<div class="marquee ">
			<div class="marquee-track ">
				{#each sponsors as sponsor}
					<span class="sponsor-text">{sponsor}</span>
				{/each}
				{#each sponsors as sponsor}
					<span class="sponsor-text">{sponsor}</span>
				{/each}
			</div>
		</div>
	</div>
	<div class="flex flex-col flex-1 pt-[160px] px-[30px] lg:px-[120px] max-w-[1440px] w-full mx-auto">
		<div class="flex flex-col gap-[40px] mb-[40px]">
			<h1 class="text-[96px] font-Medium leading-none">Hello World คืออะไร?</h1>
			<p class="text-[20px] leading-[25px] w-[60%]">
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
							<div class="flex items-center justify-between w-full h-[70%]">
								<button onclick={() => carouselIcon(-1)}>
									<ChevronLeft size={40} class="text-[#A7A7A7] hover:scale-110 transition" />
								</button>
								<img
									in:fade={{ duration: 300 }}
									out:fade={{ duration: 300 }}
									src={icons[currentIcon].icon}
									alt={icons[currentIcon].name}
									class="h-full w-auto object-contain"
								/>
								<button onclick={() => carouselIcon(1)}>
									<ChevronRight size={40} class="text-[#A7A7A7] hover:scale-110 transition" />
								</button>
							</div>
						</div>
					{/key}
				</div>
			</div>
		</div>
	</div>
	<div
		class="absolute bottom-0 h-[40px] bg-[linear-gradient(to_top,#000000,transparent)] z-20 w-full"
	></div>
</section>
