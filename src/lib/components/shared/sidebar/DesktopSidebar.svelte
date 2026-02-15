<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/assets/images/logo.png';
	import { cn } from '$lib/utils/utility-util';
	import { isActivePath, pageContents } from '../page-contents';
	import SidebarButton from './SidebarButton.svelte';

	const items = $derived(pageContents.filter((item) => item.sidebar));

	const pathname = $derived(page.url.pathname);
</script>

<aside
	class={cn(
		'hidden md:block',
		'w-64 h-210 bg-neutral-600/80 rounded-tl-[20px] rounded-bl-[20px] border border-neutral-400 backdrop-blur-md'
	)}
>
	<div class="p-6">
		<div class="w-full flex items-center justify-center mb-7">
			<img src={logo} alt="Logo" class="w-40 h-26 object-contain" />
		</div>

		<nav class="flex flex-col gap-3" aria-label="Primary navigation">
			{#each items as item (item.href)}
				<SidebarButton
					href={item.href}
					label={item.title}
					icon={item.icon}
					active={isActivePath(pathname, item.href)}
				/>
			{/each}
		</nav>

		<div class="w-40 h-0 outline-1 outline-offset-[-0.50px] outline-neutral-400 mt-5 mx-auto"></div>
	</div>
</aside>
