<script lang="ts">
	import background from '$lib/assets/images/cta2.png';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<div
	class="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
	style={`background-image: url(${background})`}
>
	<div
		class="
		bg-black/30 backdrop-blur-xl border border-white/30
		rounded-3xl shadow-2xl
		
		/* spacing */
		px-8 py-10
		md:px-20 md:py-14
		
		/* layout */
		flex flex-col items-center gap-8 md:gap-10
		
		/* responsive width */
		w-full
		md:w-[70%]
		lg:w-[50%]
		max-w-5xl
		"
	>
		<h1 class="text-5xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
			พร้อมที่จะเปิดโลกแล้วใช่ไหม?
		</h1>

		<div
			class="
			flex flex-col
			md:flex-row
			gap-4 md:gap-8
			w-full
			justify-center
			"
		>
			<Button variant="ghost" className="py-4 md:py-5 bg-white/20 w-full md:w-[250px] lg:w-[300px]">
				<span class="text-lg md:text-xl lg:text-2xl"> แบบทดสอบ </span>
			</Button>

			<Button variant="primary" className="py-4 md:py-5 w-full md:w-[250px] lg:w-[300px]">
				<span class="text-lg md:text-xl lg:text-2xl"> ลงทะเบียน </span>
			</Button>
		</div>
	</div>
</div>
