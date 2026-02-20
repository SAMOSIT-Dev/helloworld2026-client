<script lang="ts">
	import wavingModel from '$lib/assets/images/navbar/waving-model.svg?raw';
	import enrollBtn from '$lib/assets/images/navbar/enroll-btn.svg';
	import { fade } from 'svelte/transition';

	interface Props {
		sections: { name: string; id: string }[];
		navigateToSchedule: () => void;
		navigateToRegister: () => void;
		navigateOrScrollToSection: (id: string) => void;
	}

	let isClickWavingModel = $state(false);
	let timeout: ReturnType<typeof setTimeout>;
	let {
		sections = [],
		navigateToSchedule,
		navigateToRegister,
		navigateOrScrollToSection
	}: Props = $props();

	function handleClick() {
		isClickWavingModel = true;

		clearTimeout(timeout);
		timeout = setTimeout(() => {
			isClickWavingModel = false;
		}, 1500); // ⏱ 2.5 วิ
	}
</script>

<nav
	class="hidden max-w-[1440px] w-[calc(100%-48px)] lg:flex
         justify-between items-center
         px-[40px] pr-[20px]
         border border-[#969696]
         bg-[rgba(40,40,40,0.79)]
         backdrop-blur-[12.8px]
         rounded-full
        fixed top-[40px]
         left-1/2 -translate-x-1/2
         z-50 h-[63px]"
>
	<div class=" flex flex-row items-center gap-[16px] xl:gap-[24px] py-[16px]">
		{#each sections as section}
			<button
				onclick={() => navigateOrScrollToSection(section.id)}
				class="group relative text-[16px] xl:text-[20px] font-medium text-white/80 hover:text-white transition"
			>
				{section.name}

				<span
					class="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-[#F6BB43]
           transition-all duration-300
           group-hover:left-0 group-hover:w-full"
				></span>
			</button>
		{/each}
	</div>
	<div class="relative h-full w-[120px]">
		<button
			onclick={handleClick}
			class="h-full flex items-center
		       [&>svg]:h-full [&>svg]:w-auto
			  cursor-pointer"
		>
			{@html wavingModel}
		</button>
		{#if isClickWavingModel}
			<span
				class="absolute left-[80px] top-1/2 -translate-y-1/2 ml-3
                   w-max max-w-[220px] text-start
                   text-white text-[10px] xl:text-[12px] leading-relaxed"
				in:fade
				out:fade
			>
				"รู้หรือป่าว! <br class="xl:hidden" />โครงการ Hello World<br />
				จัดเป็นครั้งที่ <span class="text-[#F6BB43] font-semibold">9</span> แล้วนะ!""
			</span>
		{/if}
	</div>
	<div class="flex flex-row items-center gap-[8px] py-[8px]">
		<button
			onclick={navigateToSchedule}
			class="text-[16px] xl:text-[20px] font-medium text-[#FFF] border-2 h-[40px] xl:h-[53px] px-[24px] xl:px-[36px] rounded-full transition-colors duration-300 hover:border-[#F6BB43] hover:text-[#F6BB43] cursor-pointer"
			>ตารางเรียน
		</button>
		<button onclick={navigateToRegister} class="relative inline-block h-full cursor-pointer">
			<img src={enrollBtn} alt="Enroll" class="block h-[56px] xl:h-[63px]" />
			<span
				class="absolute inset-0 flex items-center justify-center text-[16px] xl:text-[20px] font-medium text-[#391D0C]"
			>
				ลงทะเบียน
			</span>
		</button>
	</div>
</nav>
