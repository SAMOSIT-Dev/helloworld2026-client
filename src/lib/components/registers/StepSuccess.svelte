<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';
	import { cn } from '$lib/utils/utility-util';
	import { Check } from 'lucide-svelte';

	let { isLoading } = $props<{
		isLoading: boolean;
	}>();

	const Back = () => {
		goto('/');
	};
</script>

<div class="text-center w-full">
	<div class={cn('flex flex-col items-center justify-center space-y-10 py-10')}>
		{#if isLoading}
			<div class="flex flex-col items-center gap-4">
				<div class="relative w-20 h-20">
					<div
						class="absolute inset-0 rounded-full blur-xl opacity-60 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 animate-pulse"
					></div>

					<div
						class="relative w-20 h-20 rounded-full border-4 border-transparent
				border-t-yellow-400 border-r-orange-400
				animate-spin"
					></div>
				</div>

				<p class="text-white/70 text-sm tracking-wide animate-pulse">กำลังบันทึกข้อมูล...</p>
			</div>
		{:else}
			<Button variant="primary" className={cn('w-28 h-28 md:w-32 md:h-32')} decoration={false}>
				<Check class="w-14 h-14 text-black" strokeWidth={3} />
			</Button>
		{/if}

		<div class="space-y-2">
			<div class="text-xl md:text-2xl font-semibold">
				เราได้รับคำตอบของคุณแล้ว! โปรดรอการตอบกลับ
			</div>
			<div class="text-white/70">ขอบคุณที่ให้ความสนใจและสมัครโครงการของเรา</div>
		</div>

		<Button variant="ghost"  className={cn(['w-[150px] md:w-[300px]'])} fun={Back}>ย้อนกลับ</Button>
	</div>
</div>
