<script lang="ts">
	import { cn } from '$lib/utils/utility-util';

	let {
		totalQuestion,
		currentQuestion = 1,
		percentage = $bindable(0),
		className
	}: {
		totalQuestion: number;
		currentQuestion?: number;
		percentage?: number;
		className?: string;
	} = $props();

	$effect(() => {
		percentage = totalQuestion > 0 ? Math.floor((currentQuestion / totalQuestion) * 100) : 0;
	});
</script>

<div class={cn('flex w-full items-center', className)}>
	<div class="w-full h-2.75 rounded-[9px] relative overflow-hidden bg-[#4A4A4A]">
		<div
			class="absolute h-full inset-0 left-0 bg-[linear-gradient(90deg,#DB4453_0%,#F6BB43_25.48%,#38BB9B_54.33%,#48CFAE_75.96%,#4B89DC_100%)] transition-all ease-out duration-500"
			style="width: {percentage}%;"
		></div>
	</div>
</div>
