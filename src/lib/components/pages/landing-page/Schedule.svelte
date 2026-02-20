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
			active: true
		},
		{ title: '', date: '', desc: '', active: false },
		{ title: '', date: '', desc: '', active: false },
		{ title: '', date: '', desc: '', active: false }
	];
</script>

<div
	class="relative z-1 min-h-screen w-full overflow-hidden py-20"
	style="background: url({map}) no-repeat center / cover;"
>
	<div class="inset-0 z-10 flex flex-col items-center px-4 text-white">
		<h1
			class="text-center text-[48px] font-medium [text-shadow:0_4px_25.8px_rgba(0,0,0,0.98)] md:text-[96px]"
		>
			กำหนดการ
		</h1>

		<div class="mt-12 flex w-full flex-col items-center md:w-[90%] lg:w-[80%]">
			<div class="hidden w-full justify-between mb-8 px-4 md:flex lg:px-10">
				{#each schedules as item}
					<div
						class="w-44 rounded-full border border-[#969696] bg-[rgba(102,102,102,0.43)] py-3 text-center text-sm backdrop-blur-[6.4px] lg:text-base"
					>
						{item.title}
					</div>
				{/each}
			</div>

			<div class="relative w-full">
				<div
					class="absolute left-1/2 top-0 bottom-0 w-[60px] -translate-x-1/2 rounded-full border border-[#969696] bg-[rgba(102,102,102,0.43)] backdrop-blur-[10px] md:hidden"
				></div>

				<div
					class="relative z-10 flex w-full flex-col items-center justify-between md:flex-row md:rounded-full md:border md:border-[#969696] md:bg-[rgba(102,102,102,0.43)] md:px-10 md:py-4 md:backdrop-blur-[6.4px] lg:px-20"
				>
					{#each schedules as item, i}
						<div
							class="grid w-full grid-cols-[1fr_80px_1fr] items-center md:flex md:flex-col md:w-auto"
						>
							<div class="flex flex-col items-end pr-4 text-right md:hidden">
								{#if item.date}
									<span class="text-[10px] text-gray-300 font-['Anuphan']">{item.date}</span>
									<p class="text-[10px] text-[#969696] leading-tight mt-1">
										{item.desc}
									</p>
								{/if}
							</div>

							<div class="relative flex flex-col items-center py-6 md:p-0">
								<svg
									width="30"
									height="30"
									viewBox="0 0 47 47"
									fill="none"
									class="transition-transform duration-300 hover:scale-110 md:h-[40px] md:w-[40px]"
								>
									<path
										d="M23.5 2L45 23.5L23.5 45L2 23.5L23.5 2Z"
										stroke="white"
										stroke-width="3"
										fill={item.active ? 'white' : 'none'}
									/>
								</svg>

								{#if i < schedules.length - 1}
									<div class="h-16 w-[2px] bg-white opacity-50 mt-4 md:hidden"></div>
									<div class="hidden md:block"></div>
								{/if}
							</div>

							{#if item.title}
								<div class="flex items-center pl-4 md:hidden">
									<div
										class="w-full rounded-full border border-[#969696] bg-[rgba(102,102,102,0.43)] px-4 py-2 text-center backdrop-blur-[6.4px]"
									>
										<span
											class="text-xs font-medium {item.active ? 'text-white' : 'text-gray-400'}"
										>
											{item.title}
										</span>
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<div class="hidden w-full flex-row justify-between mt-8 px-4 md:flex lg:px-10">
				{#each schedules as item}
					<div class="w-44 text-left {item.date ? 'opacity-100' : 'opacity-0'}">
						<p class="text-base font-semibold">{item.date}</p>
						<p class="my-1 text-xl font-medium">{item.title}</p>
						<p class="text-sm text-[#969696]">{item.desc}</p>
					</div>
				{/each}
			</div>
		</div>

		<button
			onclick={() => goto('/schedule')}
			class="mt-16 cursor-pointer rounded-full border-2 border-[#E3E3E3] bg-[linear-gradient(180deg,rgba(51,51,51,0.46)_3.75%,rgba(168,168,168,0.46)_100%)] px-20 py-4 text-xl font-semibold text-white backdrop-blur-[6.4px] transition-transform hover:scale-105 md:text-3xl"
		>
			ตารางเรียน
		</button>
	</div>
</div>
