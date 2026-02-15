<script lang="ts">
	import contentBackground from '$lib/assets/images/content-background.png';
	import SideBar from '$lib/components/shared/sidebar/SideBar.svelte';
	import { cn } from '$lib/utils/utility-util';

	let { children } = $props();
</script>

<div
	class="fixed inset-0 -z-10 bg-cover bg-center"
	style={`background-image: url(${contentBackground});`}
></div>

<div class="relative z-0 flex h-full w-full items-center justify-center">
	<div class="w-full max-w-360 p-2.5 md:p-15">
		<div class="flex w-full flex-col md:h-210 md:flex-row">
			<SideBar />
			<main
				class={cn(
					'flex md:flex-col flex-row',
					'items-center justify-center',
					'w-full h-full text-white',
					'md:rounded-r-[20px] md:rounded-l-none',
					'rounded-t-none rounded-b-[20px]',
					'bg-zinc-800/80 border border-neutral-400 backdrop-blur-[31.45px]'
				)}
			>
				{@render children()}
			</main>
		</div>
	</div>
</div>
