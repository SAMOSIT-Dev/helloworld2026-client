<script lang="ts">
	import { goto } from '$app/navigation';
	import map from '$lib/assets/images/map.jpg';

	const schedules = [
		{
			title: 'Base Camp',
			date: '1 มีนาคม 2026',
			desc: 'เริ่มปูพื้นฐาน เตรียมเครื่องมือและทำความรู้จักกัน',
			active: true
		},
		{
			title: 'The Mystic Forest',
			date: '15 มีนาคม 2026',
			desc: 'ตะลุยป่าเวทมนตร์ เรียนรู้เทคนิคขั้นสูง',
			active: false
		},
		{ title: 'Coming soon', date: '', desc: '', active: false },
		{ title: 'Coming soon', date: '', desc: '', active: false },
		{ title: 'Coming soon', date: '', desc: '', active: false }
	];
</script>

<div
	class="relative w-full min-h-screen z-1 overflow-hidden py-20"
	style="background: url({map}) no-repeat center / cover;"
>
	<div class="inset-0 flex flex-col items-center text-white z-10 px-4">
		<h1
			class="text-center text-[48px] md:text-[96px] font-medium font-['Anuphan'] [text-shadow:0_4px_25.8px_rgba(0,0,0,0.98)]"
		>
			กำหนดการ
		</h1>

		<div
			class="mt-12 w-full md:w-[90%] lg:w-[80%] flex flex-row md:flex-col items-start md:items-stretch"
		>
			<div class="hidden md:flex justify-between px-4 lg:px-10 mb-8">
				{#each schedules as item}
					<div
						class="w-44 py-3 rounded-full border border-[#969696] bg-[rgba(102,102,102,0.43)] backdrop-blur-[6.4px] text-center text-sm lg:text-base font-['Anuphan']"
					>
						{item.title}
					</div>
				{/each}
			</div>

			<div
				class="flex flex-col md:flex-row items-center justify-between py-10 md:py-4 px-4 md:px-10 lg:px-20 rounded-[50px] md:rounded-full border border-[#969696] bg-[rgba(102,102,102,0.43)] backdrop-blur-[6.4px]"
			>
				{#each schedules as item, i}
					<div class="relative group">
						<svg
							width="40"
							height="40"
							viewBox="0 0 47 47"
							fill="none"
							class="transition-transform duration-300 group-hover:scale-110"
						>
							<path
								d="M23.5 2L45 23.5L23.5 45L2 23.5L23.5 2Z"
								stroke="white"
								stroke-width="2"
								fill={item.active ? 'white' : 'none'}
							/>
						</svg>
						<div
							class="absolute left-12 top-1/2 -translate-y-1/2 md:hidden whitespace-nowrap font-['Anuphan']"
						>
							<span class={item.active ? 'text-white' : 'text-gray-400'}>{item.title}</span>
						</div>
					</div>

					{#if i < schedules.length - 1}
						<div class="w-[2px] h-12 md:w-full md:h-[3px] bg-white opacity-50 my-2 md:my-0"></div>
					{/if}
				{/each}
			</div>

			<div class="flex flex-col md:flex-row justify-between mt-8 ml-8 md:ml-0 md:px-4 lg:px-10">
				{#each schedules as item}
					<div
						class="w-full md:w-44 mb-10 md:mb-0 text-left transition-opacity {item.date
							? 'opacity-100'
							: 'opacity-0 pointer-events-none hidden md:block'}"
					>
						<p class="text-[12px] md:text-base font-semibold font-['Anuphan'] text-white">
							{item.date}
						</p>
						<p class="text-[16px] md:text-xl font-medium font-['Anuphan'] text-white my-1">
							{item.title}
						</p>
						<p
							class="text-[#969696] text-[10px] md:text-sm font-medium font-['Anuphan'] leading-relaxed"
						>
							{item.desc}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<button
			onclick={() => goto('/schedule')}
			class="cursor-pointer mt-10 md:mt-20 px-16 md:px-24 py-4 md:py-5 text-white text-xl md:text-3xl font-semibold font-['Anuphan'] rounded-full border-2 border-[#E3E3E3] bg-[linear-gradient(180deg,rgba(51,51,51,0.46)_3.75%,rgba(168,168,168,0.46)_100%)] backdrop-blur-[6.4px] hover:scale-105 transition-transform"
		>
			ตารางเรียน
		</button>
	</div>
</div>

<style>
</style>
