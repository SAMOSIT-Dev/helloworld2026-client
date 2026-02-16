<script lang="ts">
	import FileCard from '$lib/components/pages/files-page/file/FileCard.svelte';
	import { files } from '$lib/components/pages/files-page/files';
	import type { RoleInfo } from '$lib/components/shared/roles';

	type Props = {
		data: RoleInfo;
	};

	const props: Props = $props();

	const filteredFiles = files.filter((file) => file.role.includes(props.data.id));
</script>

<div class="flex flex-col items-start justify-start h-full py-10 md:py-15 md:px-12 gap-10">
	<div
		class="text-center md:text-start text-white text-4xl md:text-5xl font-semibold font-['Anantason'] w-full shrink-0"
	>
		{props.data.name} Files
	</div>

	<div class="flex-1 min-h-0 overflow-y-auto">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-13 w-full px-4">
			{#each filteredFiles as file (file.id)}
				<FileCard {file} />
			{/each}
		</div>
	</div>
</div>

<style>
	::-webkit-scrollbar {
		display: none;
	}
</style>
