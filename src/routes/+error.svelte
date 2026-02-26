<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import bg from '$lib/assets/images/error/background.png';

	import zero from '$lib/assets/images/number/0.svg';
	import one from '$lib/assets/images/number/1.svg';
	import two from '$lib/assets/images/number/2.svg';
	import three from '$lib/assets/images/number/3.svg';
	import four from '$lib/assets/images/number/4.svg';
	import five from '$lib/assets/images/number/5.svg';
	import six from '$lib/assets/images/number/6.svg';
	import seven from '$lib/assets/images/number/7.svg';
	import eight from '$lib/assets/images/number/8.svg';
	import nine from '$lib/assets/images/number/9.svg';

	import { ArrowLeft } from '@lucide/svelte';

	import Footer from '$lib/components/shared/Footer.svelte';
	import { cn } from '$lib/utils/utility-util';

	const numberMap = {
		0: zero,
		1: one,
		2: two,
		3: three,
		4: four,
		5: five,
		6: six,
		7: seven,
		8: eight,
		9: nine
	};

	const status = $derived(page.status ?? 500);
	const statusString = $derived(String(status));

	const digits = $derived(
		[...statusString]
			.map((ch) => numberMap[ch as unknown as keyof typeof numberMap])
			.filter(Boolean)
	);

	const message = $derived(
		page.error?.message || (status === 404 ? 'ไม่พบหน้านี้' : 'เกิดข้อผิดพลาดบางอย่าง')
	);
</script>

<div class="relative h-dvh w-full overflow-hidden bg-black text-white p-0">
	<img
		src={bg}
		alt="Error Background"
		draggable="false"
		class={cn(
			'absolute',
			'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 md:scale-100',
			'md:top-0 md:left-0 md:translate-x-0 md:translate-y-0',
			'md:inset-0 md:h-full md:w-full'
		)}
	/>

	<div class="relative z-10 flex h-full w-full flex-col">
		<main class="flex flex-1 flex-col items-center justify-center px-7 gap-4 md:gap-8">
			<div
				class="flex justify-center gap-2 h-27 md:h-54 w-87 mt-15 md:mt-20"
				aria-label={`Error ${status}`}
			>
				{#each digits as digit, i (i)}
					<img
						src={digit}
						alt={`${statusString[i]}`}
						class="h-full object-contain"
						draggable="false"
					/>
				{/each}
			</div>

			<div
				class="md:w-210 w-88 rounded-2xl border border-neutral-600 bg-neutral-700/40 backdrop-blur-md md:backdrop-blur-blur py-4 md:py-7"
			>
				<p
					class="text-center justify-start text-white text-sm md:text-3xl font-medium font-['Anantason']"
				>
					{message}
				</p>
			</div>

			<a
				href={resolve('/')}
				class={cn(
					"inline-flex items-center gap-3 text-white font-['Anantason'] font-light transition-colors hover:text-[#EFC30A]",
					// Mobile
					'absolute bottom-[25%] left-1/2 -translate-x-1/2 text-base whitespace-nowrap',
					// Desktop
					'md:static md:bottom-auto md:left-auto md:translate-x-0 md:text-2xl'
				)}
			>
				<ArrowLeft class="size-6 text-[#EFC30A] inline-block align-middle" aria-hidden="true" />
				<span>ย้อนกลับไปหน้าหลัก</span>
			</a>
		</main>

		<Footer />
	</div>
</div>

<style>
	* {
		user-select: none;
	}
</style>
