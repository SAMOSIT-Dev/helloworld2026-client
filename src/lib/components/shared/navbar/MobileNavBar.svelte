<script lang="ts">
	import wavingModel from '$lib/assets/images/navbar/waving-model.svg';
	import schedule from '$lib/assets/images/navbar/schedule.svg';
	import circleEnrollBtn from '$lib/assets/images/navbar/circle-enroll-btn.svg';
	import { LogOut } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		sections: { name: string; section: string }[];
		handleScrollIntoView: (section: string) => void;
	}

	let isOpenMenu = $state(false);
	let { sections = [], handleScrollIntoView }: Props = $props();

	const DURATION = 300;
</script>

<div class="flex flex-col pt-[24px] gap-[30px] h-screen relative items-center">
	<nav
		class="flex flex-row items-center justify-between lg:hidden w-[calc(100%-12px)] border border-[#969696]
         bg-[rgba(40,40,40,0.79)]
         backdrop-blur-[12.8px]
         rounded-full
         z-50 h-[63px]"
	>
		<div class="flex flex-row relative pl-[20px] md:pl-[42px] h-full items-center gap-[4px]">
			<button onclick={() => (isOpenMenu = !isOpenMenu)} class="relative w-[80px] h-full">
				<img src={wavingModel} alt="Waving Model" class="absolute bottom-0 w-auto h-full" />
			</button>
			{#if !isOpenMenu}
				<p
					in:fade={{ duration: 300 }}
					out:fade={{ duration: 300 }}
					class="text-white text-[10px] md:text-[14px] font-semibold"
				>
					"ลอง<span class="text-[#F6BB43]">กดเรา</span>ดูสิ!"
				</p>
			{/if}
		</div>
		<div class="flex flex-row gap-[8px] py-[8px] pr-[20px] md:pr-[42px]">
			<button
				class=" border-2 border-[#EEE] rounded-full w-[48px] h-[48px] flex items-center justify-center"
			>
				<img src={schedule} alt="Schedule" />
			</button>
			<div class="relative">
				<img src={circleEnrollBtn} alt="Circle Enroll Button" class="w-[48px] h-[48px]" />
				<LogOut
					class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					color="#391D0C"
					width="24"
					height="24"
				/>
			</div>
		</div>
	</nav>

	<div class="flex flex-col items-start pl-[46px] z-[55px] relative gap-4 w-full">
		{#each sections as section, i}{#if isOpenMenu}
				<button
					in:fade={{ duration: DURATION, delay: 50 * i }}
					out:fade={{ duration: DURATION }}
					onclick={() => {
						handleScrollIntoView(section.section);
						isOpenMenu = false;
					}}
					class="text-white text-[32px] font-semibold z-50"
				>
					{section.name}
				</button>
			{/if}{/each}
	</div>

	{#if isOpenMenu}
		<div
			in:fade={{ duration: DURATION }}
			out:fade={{ duration: DURATION }}
			class="absolute top-0 left-0 w-full h-full bg-[rgba(40,40,40,0.8)] z-40"
		></div>
	{/if}
</div>
