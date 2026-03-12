<script lang="ts">
	import wavingModel from '$lib/assets/images/navbar/waving-model.svg';
	import schedule from '$lib/assets/images/navbar/schedule.svg';
	import circleEnrollBtn from '$lib/assets/images/navbar/circle-enroll-btn.svg';
	import { FileIcon, LogOut } from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import Button from '$lib/components/ui/Button.svelte';
	import { closeForm } from '$lib/utils/utility-util';

	interface Props {
		sections: { name: string; id: string }[];
		navigateToFiles: () => void;
		navigateToRegister: () => void;
		navigateOrScrollToSection: (id: string) => void;
	}

	let isOpenMenu = $state(false);
	let {
		sections = [],
		navigateToFiles,
		navigateToRegister,
		navigateOrScrollToSection
	}: Props = $props();

	const DURATION = 300;
</script>

<!-- <div class="absolute lg:hidden inset-0"> -->
<!-- <div class="flex flex-col pt-[24px] gap-[30px] absolute left-0 right-0 items-center"> -->
<div class="lg:hidden w-screen flex flex-col min-w-0 overflow-hidden">
	<nav
		class="flex flex-row items-center justify-between w-[calc(90%)] border border-[#969696]
         bg-[rgba(40,40,40,0.79)]
         backdrop-blur-[12.8px]
         rounded-full
         z-100 h-[63px] fixed left-1/2 -translate-x-1/2 top-0 mt-5"
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
				onclick={navigateToFiles}
				class=" border-2 border-[#EEE] text-white rounded-full w-[48px] h-[48px] flex items-center justify-center"
			>
				<!-- <img src={schedule} alt="Schedule" /> -->
				<FileIcon />
			</button>
			<button
				disabled={closeForm()}
				onclick={navigateToRegister}
				class="relative disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<img src={circleEnrollBtn} alt="Circle Enroll Button" class="w-[48px] h-[48px]" />
				<LogOut
					class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					color="#391D0C"
					width="24"
					height="24"
				/>
			</button>
		</div>
	</nav>
	{#if isOpenMenu}
		<div
			class="flex flex-col fixed min-h-0 top-0 mt-[100px] z-10000 overflow-hidden items-start justify-between h-screen w-full pb-[80px]"
		>
			<div class="flex flex-col items-start pl-[46px] z-[55px] relative gap-4">
				{#each sections as section, i}{#if isOpenMenu}
						<button
							in:fade={{ duration: DURATION, delay: 50 * i }}
							out:fade={{ duration: DURATION }}
							onclick={() => {
								navigateOrScrollToSection(section.id);
								isOpenMenu = false;
							}}
							class="text-white text-[32px] font-semibold z-50"
						>
							{section.name}
						</button>
					{/if}{/each}
			</div>
			{#if isOpenMenu}
				<div class="flex flex-col items-center gap-[20px] w-full relative z-1000 mb-20">
					<button
						in:fade={{ duration: DURATION }}
						onclick={() => {
							navigateToFiles();
							isOpenMenu = false;
						}}
						class="text-white text-[20px] font-black py-[12px] h-[60px] w-[80%] border-2 border-[#EEE] rounded-full z-50"
					>
						เอกสารประกอบการเรียน
					</button>
					<div
						in:fade={{ duration: DURATION }}
						class="p-[7px] rounded-full bg-linear-to-b h-[60px] from-[#BB5B0D] to-[#673311] via-[#391D0C] w-[80%] z-50"
					>
						<button
							onclick={() => {
								navigateToRegister();
								isOpenMenu = false;
							}}
							disabled={closeForm()}
							class="text-[#391D0C] text-[20px] font-black py-[5px] border-2 w-full bg-radial from-[#F6DD54] via-[#EFC30A] to-[#E4910A] rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{closeForm() ? 'ปิดลงทะเบียน' : 'ลงทะเบียน'}
						</button>
					</div>
				</div>
			{/if}
		</div>
		<div
			in:fade={{ duration: DURATION }}
			out:fade={{ duration: DURATION }}
			class="fixed inset-0 top-0 left-0 w-screen h-screen bg-[rgba(40,40,40,0.8)] z-50 backdrop-blur-md"
		></div>
	{/if}
</div>
<!-- </div> -->
