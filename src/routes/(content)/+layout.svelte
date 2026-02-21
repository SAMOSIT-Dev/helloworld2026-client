<script lang="ts">
	import Background from '$lib/components/shared/Background.svelte';
	import NavBar from '$lib/components/shared/navbar/NavBar.svelte';
	import SideBar from '$lib/components/shared/sidebar/SideBar.svelte';
	import { cn } from '$lib/utils/utility-util';

	let { children } = $props();
</script>

<Background />

<NavBar />

<div class="relative z-0 flex h-full w-full items-center justify-center mt-23.75">
	<div class="w-full max-w-360 p-2.5 md:p-15">
		<div class="flex w-full flex-col md:h-210 md:flex-row">
			<SideBar />
			<main
				class={cn(
					'flex',
					'w-full min-h-165',
					'text-white',
					'md:rounded-r-[20px] md:rounded-l-none',
					'rounded-t-none rounded-b-[20px]',
					'bg-zinc-800/80 border border-neutral-400 backdrop-blur-[31.45px]'
				)}
			>
				<div class="flex-1">
					{@render children()}
				</div>
			</main>
		</div>
	</div>
</div>
