<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import FolderCard from '$lib/components/pages/files-page/folder/FolderCard.svelte';
	import { getPageContent } from '$lib/components/shared/page-contents';
	import { roles } from '$lib/components/shared/roles';

	const pathname = $derived(page.url.pathname);
	const content = $derived(getPageContent(pathname));
</script>

<div class="flex flex-col items-center justify-center md:gap-5 h-full gap-6">
	<div class="text-white text-5xl font-semibold font-['Anantason']">
		{content?.title || 'Unknown Page'}
	</div>

	<div
		class="text-center text-white text-xl font-medium font-['Inter'] [text-shadow:0px_4px_19px_rgb(0_0_0/0.64)] line-clamp-3"
	>
		{content?.description || ''}
	</div>

	<div class="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 px-8 py-4">
		{#each roles as role (role.id)}
			<a
				href={resolve('/(content)/files/[roleId]', { roleId: role.id })}
				class="block cursor-pointer"
			>
				<FolderCard label={role.name} color={role.color} />
			</a>
		{/each}
	</div>
</div>
