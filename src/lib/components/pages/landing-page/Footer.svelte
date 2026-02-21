<script lang="ts">
	import SAMO from '$lib/assets/images/logo/SAMO.png';
	import SIT from '$lib/assets/images/logo/SIT.png';
	import KMUTT from '$lib/assets/images/logo/KMUTT.png';
	import { cn } from '$lib/utils/utility-util';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { tick } from 'svelte';

	const handleScrollIntoView = (id: string) => {
		if (!browser) return;

		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	async function navigateOrScrollToSection(e: Event, id: string) {
		e.preventDefault();

		if ($page.url.pathname !== '/') {
			await goto('/');
			await tick();
		}
		handleScrollIntoView(id);
	}
</script>

<div class={cn('py-10 w-full flex flex-col ')}>
	<div
		class={cn(
			'max-w-full mx-6 px-0 lg:px-50',
			'flex flex-col md:flex-row',
			'justify-between items-start gap-12'
		)}
	>
		<div class={cn('flex items-start justify-center  gap-3 md:gap-6')}>
			<img src={KMUTT} class={cn('h-12')} alt="KMUTT" />

			<div class={cn('w-px h-14 bg-gray-400')}></div>

			<img src={SIT} class={cn('h-12')} alt="SIT" />

			<div class={cn('w-px h-14 bg-gray-400')}></div>

			<img src={SAMO} class={cn('h-14')} alt="SAMO SIT" />
		</div>

		<div class={cn('flex flex-col md:flex-row space-y-7  gap-4 md:gap-20')}>
			<ul class={cn('space-y-5 font-semibold')}>
				<li class={cn('text-xl font-bold')}>
					<a href="/" onclick={(e) => navigateOrScrollToSection(e, 'hero')}>หน้าหลัก</a>
				</li>
				<li class={cn('text-sm cursor-pointer')}>
					<a href="/" onclick={(e) => navigateOrScrollToSection(e, 'about')}>เกี่ยวกับค่าย</a>
				</li>
				<li class={cn('text-sm cursor-pointer')}>
					<a href="/" onclick={(e) => navigateOrScrollToSection(e, 'branch')}>สาขาในค่าย</a>
				</li>
				<li class={cn('text-sm cursor-pointer')}>
					<a href="/" onclick={(e) => navigateOrScrollToSection(e, 'schedule')}>กำหนดการ</a>
				</li>
			</ul>

			<ul class={cn('space-y-5 font-semibold')}>
				<li class={cn('text-xl font-bold')}>เมนู</li>
				<li class={cn('text-sm cursor-pointer')}>
					<a href="/schedules">ตารางเรียน</a>
				</li>
				<li class={cn('text-sm cursor-pointer')}>
					<a href="/files">ไฟล์</a>
				</li>
				<li class={cn('text-sm cursor-pointer')}>
					<a href="/quiz">แบบทดสอบ</a>
				</li>
			</ul>

			<ul class={cn('space-y-5 font-semibold')}>
				<li class={cn('text-xl font-bold')}>ข้อมูล</li>
				<li class={cn('text-sm cursor-pointer')}>
					<a href="https://www.instagram.com/sithelloworld/" target="_blank" rel="noreferrer">
						อินสตาแกรมโครงการ
					</a>
				</li>
				<li class={cn('text-sm cursor-pointer')}>
					<a href="https://www.sit.kmutt.ac.th/">คณะเทคโนโลยีสารสนเทศ</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="flex relative overflow-hidden max-w-6xl mt-5 mx-auto w-auto flex-col">
		<div class={cn('w-full mx-auto px-6')}>
			<h1 class={cn('text-[49px] text-center md:text-[160px] font-black tracking-tight')}>
				HELLO WORLD
			</h1>
		</div>

		<div class={cn('border-t w-full mx-auto mt-5 md:w-367 md:mt-2')}></div>

		<div
			class={cn(
				'px-6 lg:px-0 py-6',
				'flex justify-between',
				'text-xs text-gray-700 tracking-tight'
			)}
		>
			<div class={cn('text-xs')}>School of Information Technology</div>

			<div class={cn('text-xs text-right md:text-left')}>
				2026 ALL RIGHT RESERVED BY SAMOSIT DEV
			</div>

			<div class={cn('hidden md:block gap-6')}>
				<span class={cn('cursor-pointer')}>Privacy Policy</span>
				<span class={cn('cursor-pointer')}>Term of Service</span>
			</div>
		</div>
	</div>
</div>
