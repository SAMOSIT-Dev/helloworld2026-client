<script lang="ts">
	import SAMO from '$lib/assets/images/logo/SAMO.png';
	import SIT from '$lib/assets/images/logo/SIT.png';
	import KMUTT from '$lib/assets/images/logo/KMUTT.png';
	import { cn } from '$lib/utils/utility-util';
</script>

<div class={cn('py-10')}>
	<div
		class={cn(
			'max-w-6xl mx-auto px-6',
			'flex flex-col md:flex-row',
			'justify-between items-start gap-12'
		)}
	>
		<div class={cn('flex items-start gap-6')}>
			<img src={KMUTT} class={cn('h-12')} alt="KMUTT" />

			<div class={cn('w-px h-14 bg-gray-400')}></div>

			<img src={SIT} class={cn('h-12')} alt="SIT" />

			<div class={cn('w-px h-14 bg-gray-400')}></div>

			<img src={SAMO} class={cn('h-14')} alt="SAMO SIT" />
		</div>

		<div class={cn('flex flex-wrap gap-20')}>
			<ul class={cn('space-y-5 font-semibold')}>
				<li class={cn('text-xl')}>
					<a href="#">หน้าหลัก</a>
				</li>
				<li class={cn('text-xs cursor-pointer')}>
					<a href="#">เกี่ยวกับค่าย</a>
				</li>
				<li class={cn('text-xs cursor-pointer')}>
					<a href="#">สาขาในค่าย</a>
				</li>
				<li class={cn('text-xs cursor-pointer')}>
					<a href="#">กำหนดการ</a>
				</li>
			</ul>

			<ul class={cn('space-y-5 font-semibold')}>
				<li class={cn('text-xl')}>เมนู</li>
				<li class={cn('text-xs cursor-pointer')}>
					<a href="#">ตารางเรียน</a>
				</li>
				<li class={cn('text-xs cursor-pointer')}>
					<a href="#">ไฟล์</a>
				</li>
				<li class={cn('text-xs cursor-pointer')}>
					<a href="#">แบบทดสอบ</a>
				</li>
			</ul>

			<ul class={cn('space-y-5 font-semibold')}>
				<li class={cn('text-xl')}>ข้อมูล</li>
				<li class={cn('text-xs cursor-pointer')}>
					<a href="https://www.instagram.com/sithelloworld/"> อินสตาแกรมโครงการ </a>
				</li>
				<li class={cn('text-xs cursor-pointer')}>นโยบายความเป็นส่วนตัว</li>
				<li class={cn('text-xs cursor-pointer')}>คณะเทคโนโลยีสารสนเทศ</li>
			</ul>
		</div>
	</div>
</div>

<div class={cn('max-w-6xl mx-auto px-6')}>
	<h1 class={cn('text-[65px] md:text-[160px] font-black tracking-tight')}>HELLO WORLD</h1>
</div>

<div class={cn('mx-auto border-t w-md mt-5 md:w-270 md:mt-2')}></div>

<div
	class={cn(
		'max-w-6xl mx-auto px-6 py-6',
		'flex justify-between',
		'text-xs text-gray-700 tracking-tight'
	)}
>
	<div>School of Information Technology</div>

	<div class={cn('text-right md:text-left')}>2026 ALL RIGHT RESERVED BY SAMOSIT DEV</div>

	<div class={cn('hidden md:block gap-6')}>
		<span class={cn('cursor-pointer')}>Privacy Policy</span>
		<span class={cn('cursor-pointer')}>Term of Service</span>
	</div>
</div>
