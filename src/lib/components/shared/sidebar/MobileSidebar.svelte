<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { ArrowLeft } from '@lucide/svelte';
	import { getPageContent, isActivePath, pageContents } from '../page-contents';
	import SidebarButton from './SidebarButton.svelte';

	const pathname = $derived(page.url.pathname);
	const pageContent = $derived(getPageContent(pathname));

	const items = $derived(pageContents.filter((item) => item.sidebar));

	const goBack = () => {
		if (browser) window.history.back();
	};
</script>

<header
	class="w-full h-28 bg-neutral-600/80 rounded-tl-[20px] rounded-tr-[20px] border border-neutral-400 backdrop-blur-md md:hidden"
>
	<div class="flex h-full items-center justify-between p-7">
		<div class="flex items-center gap-2.5">
			<button
				type="button"
				class="w-8 h-8 relative rounded-[1px] overflow-hidden"
				aria-label="Back Button"
				onclick={goBack}
			>
				<ArrowLeft class="w-full h-full object-contain text-white" aria-hidden="true" />
			</button>
			<span class="justify-start text-white text-3xl font-semibold font-['Anantason']">
				{pageContent?.title || 'Untitled Page'}
			</span>
		</div>

		<nav class="flex items-center gap-2" aria-label="Navigation">
			{#each items as item (item.href)}
				<SidebarButton
					href={item.href}
					label={item.title}
					icon={item.icon}
					active={isActivePath(pathname, item.href)}
				/>
			{/each}
		</nav>
	</div>
</header>
