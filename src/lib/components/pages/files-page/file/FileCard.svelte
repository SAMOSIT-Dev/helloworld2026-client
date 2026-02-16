<script lang="ts">
	import { getRoleById } from '$lib/components/shared/roles';
	import Card from '$lib/components/ui/Card.svelte';
	import { cn } from '$lib/utils/utility-util';
	import { ClockIcon, DatabaseIcon, DownloadIcon, LoaderIcon } from '@lucide/svelte';
	import type { FileItem } from '../files';
	import FileIcon from './FileIcon.svelte';

	type Props = {
		file: FileItem;
		className?: string;
	};

	const { file, className = '' }: Props = $props();

	const role = $derived(getRoleById(file.role));
	const disabled = $derived(file.status !== 'available' || !file.downloadUrl);

	let isDownloading = $state(false);

	const handleDownload = async () => {
		if (disabled || isDownloading) return;

		isDownloading = true;

		try {
			const res = await fetch(file.downloadUrl);
			if (!res.ok) throw new Error(`Failed to download: ${res.status}`);

			const blob = await res.blob();
			const url = URL.createObjectURL(blob);

			const a = document.createElement('a');
			a.href = url;

			const base = file.title?.trim() || 'download';
			a.download = file.kind ? `${base}.${file.kind}` : base;

			document.body.appendChild(a);
			a.click();
			a.remove();

			URL.revokeObjectURL(url);
		} finally {
			isDownloading = false;
		}
	};
</script>

<Card class={cn('w-41.5 h-58 md:w-48 md:h-72', className)}>
	<div class="w-full h-full flex items-center justify-center flex-col gap-1">
		<FileIcon
			color={role?.color}
			kind={file.kind}
			status={file.status}
			className="size-24 md:size-29"
		/>

		<div class="flex flex-col gap-0 md:gap-1">
			<div
				class="text-center text-white text-md md:text-xl font-semibold font-['Anantason'] line-clamp-1"
			>
				{file.title}
			</div>

			<div>
				<ClockIcon color={role?.color} class="inline-block w-4 h-4 mr-1" />
				<span class="text-white text-xs md:text-sm font-semibold font-['Anantason']"
					>{file.timeLabel}</span
				>
			</div>

			<div>
				<DatabaseIcon color={role?.color} class="inline-block w-4 h-4 mr-1" />
				<span class="text-white text-xs md:text-sm font-semibold font-['Anantason']"
					>{file.sizeLabel}</span
				>
			</div>
		</div>

		<button
			type="button"
			disabled={disabled || isDownloading}
			onclick={handleDownload}
			class="cursor-pointer w-32 h-7 md:w-36 md:h-8 bg-neutral-600 rounded-md border border-neutral-400 py-2 md:py-2.5 px-3 md:px-3.5 flex items-center justify-between mt-1 md:mt-2 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:border-neutral-400"
		>
			<span class="text-white text-xs md:text-sm font-semibold font-['Anantason']">Download</span>
			{#if isDownloading}
				<LoaderIcon class="w-3.5 h-3.5 ml-2 inline-block text-white animate-spin" />
			{:else}
				<DownloadIcon class="w-3.5 h-3.5 ml-2 inline-block text-white" />
			{/if}
		</button>
	</div>
</Card>
