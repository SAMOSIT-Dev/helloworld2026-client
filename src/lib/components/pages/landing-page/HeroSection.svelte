<script lang="ts">
	import helloLogo from '$lib/assets/images/logo/hello-logo.svg';
	import { goto } from '$app/navigation';
	import { ArrowDown } from '@lucide/svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { browser } from '$app/environment';
	import { closeForm } from '$lib/utils/utility-util';

	const y = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	function loop() {
		y.set(12)
			.then(() => y.set(0))
			.then(loop);
	}

	loop();

	const handdleScrollTo = () => {
		if (!browser) return;
		const element = document.getElementById('about');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<section
	class="bg-[url('$lib/assets/images/background/hero-section-background.svg')] bg-center bg-cover relative h-screen flex flex-col justify-center items-center gap-[20px] md:gap-[60px]"
>
	<img src={helloLogo} alt="Hello Logo" class="w-[90%] md:w-[50%] max-w-[700px] h-auto z-20" />
	<button
		onclick={() => goto('/register')}
		disabled={closeForm()}
		class="relative w-[80%] md:w-[60%] max-w-[450px] py-[18px] md:py-[24px] rounded-full border-2 text-white overflow-hidden z-20 border-[#E3E3E3] backdrop-blur-md disabled:opacity-50 disabled:cursor-not-allowed"
	>
		<span
			class="absolute inset-0 [background:linear-gradient(to_bottom,#333333,#A8A8A8)] rounded-full opacity-50"
		></span>
		<span class="relative z-10 text-[20px] md:text-[30px] font-medium text-[#FFFFFF]">
			{closeForm() ? 'ปิดลงทะเบียน' : 'ลงทะเบียน'}
		</span>
	</button>
	<span
		class="absolute inset-0
    bg-[radial-gradient(circle,rgba(204,204,204,0.0)_0%,rgba(0,0,0,0.5)_100%)] backdrop-blur-[2px] z-10"
	>
	</span>
	<button
		onclick={handdleScrollTo}
		class="absolute bottom-[40px] z-20 cursor-pointer"
		style="transform: translateY({$y}px)"
	>
		<div class="flex flex-col items-center">
			<p class="text-white text-[20px] md:text-[24px] font-light">เลื่อนดูรายละเอียดเพิ่มเติม</p>
			<ArrowDown size={24} stroke-width={1} color="white" class="" />
		</div>
	</button>
</section>
