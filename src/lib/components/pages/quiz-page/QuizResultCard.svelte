<script lang="ts" module>
	const tracks = ['UX/UI', 'FE', 'BE', 'DB'] as const;

	export type Tracks = (typeof tracks)[number];

	export const fullTrackNameMapping: Record<Tracks, string> = {
		'UX/UI': 'UX/\nUI',
		FE: 'Front\nend',
		BE: 'Back\nend',
		DB: 'Data\nbase'
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/utility-util';

	import frontendMascot from '$lib/assets/images/mascot/mascot-fe.png';
	import frontendMascotShadow from '$lib/assets/images/mascot/mascot-fe-shadow.png';
	import backendMascot from '$lib/assets/images/mascot/mascot-be.png';
	import backendMascotShadow from '$lib/assets/images/mascot/mascot-be-shadow.png';
	import databaseMascot from '$lib/assets/images/mascot/mascot-db.png';
	import databaseMascotShadow from '$lib/assets/images/mascot/mascot-db-shadow.png';
	import uxuiMascot from '$lib/assets/images/mascot/mascot-ux-ui.png';
	import uxuiMascotShadow from '$lib/assets/images/mascot/mascot-ux-ui-shadow.png';

	const variants: Record<Tracks, string> = {
		'UX/UI': 'bg-radial-[at_50%_0%] from-black/80 via-emerald-500 via 50% to-emerald-500',
		BE: 'bg-radial-[at_50%_0%] from-black/80 via-red-500 via 50% to-red-500',
		FE: 'bg-radial-[at_50%_0%] from-black/80 via-amber-300 via 50% to-amber-300',
		DB: 'bg-radial-[at_50%_0%] from-black/80 via-[#4A89E0] via 50% to-[#5D9CEC]'
	};

	const mascotMapping: Record<Tracks, { [key: string]: string }> = {
		'UX/UI': {
			mascot: uxuiMascot,
			shadow: uxuiMascotShadow
		},
		BE: {
			mascot: backendMascot,
			shadow: backendMascotShadow
		},
		FE: {
			mascot: frontendMascot,
			shadow: frontendMascotShadow
		},
		DB: {
			mascot: databaseMascot,
			shadow: databaseMascotShadow
		}
	};

	const props: { varaints: keyof typeof variants | null } = $props();
</script>

{#if props?.varaints}
	<div
		class={cn('w-80.25 h-209.5 overflow-hidden relative flex flex-col', variants[props.varaints])}
	>
		<div class="absolute w-full h-full bg-linear-to-b from-black to-transparent inset-0"></div>
		<div
			class="absolute w-full h-full bg-linear-to-t from-gray-500/20 to-transparent inset-0"
		></div>
		<div class="relative">
			<p
				class="absolute px-1 top-0 mt-5 uppercase text-wrap wrap-break-word w-full text-center text-[120px] leading-28 stroke-1 font-bold"
			>
				{fullTrackNameMapping[props.varaints]}
			</p>
			<div class="absolute top-65">
				<img
					src={mascotMapping[props.varaints].shadow}
					class="absolute -bottom-40.25 left-0.75 opacity-40"
					alt=""
				/>
				<img src={mascotMapping[props.varaints].mascot} class="relative top-0" alt="" />
			</div>
		</div>
	</div>
{/if}
