<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import { cn } from '$lib/utils/utility-util';
	import Input_Kmutt from '$lib/assets/images/icons/input_kmutt.png';
	import Input_Discord from '$lib/assets/images/icons/input_discord.svg';
	import type { FormSchema } from '$lib/utils/shema';
	import { goto } from '$app/navigation';
	import FE_ACTIVE from '$lib/assets/images/icons/frontend.svg';
	import FE from '$lib/assets/images/icons/new-frontend-shadow.svg';
	import BE_ACTIVE from '$lib/assets/images/icons/backend.svg';
	import BE from '$lib/assets/images/icons/new-blackend-shadow.svg';
	import UXUI_ACTIVE from '$lib/assets/images/icons/uxui.svg';
	import UXUI from '$lib/assets/images/icons/new-uxui-shadow.svg';
	import DB_ACTIVE from '$lib/assets/images/icons/database.svg';
	import DB from '$lib/assets/images/icons/new-database-shadow.svg';

	let {
		formData = $bindable(),
		errors,
		next
	} = $props<{
		formData: FormSchema;
		errors: any;
		next: () => void;
	}>();

	const departments = ['เทคโนโลยีสารสนเทศ', 'วิทยาการคอมพิวเตอร์', 'นวัตกรรมบริการดิจิตอล'];
	const tracks = [
		{ name: 'UX/UI', normal: UXUI, active: UXUI_ACTIVE },
		{ name: 'Frontend', normal: FE, active: FE_ACTIVE },
		{ name: 'Backend', normal: BE, active: BE_ACTIVE },
		{ name: 'Database', normal: DB, active: DB_ACTIVE }
	] as const;

	const handleBack = () => {
		goto('/');
	};
</script>

<div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-6 md:gap-y-10">
	<div class="space-y-6 md:space-y-8">
		<Input
			label="Email"
			placeholder="@mail.kmutt.ac.th"
			bind:value={formData.email}
			error={errors.email}
		>
			{#snippet icon()}
				<img src={Input_Kmutt} alt="kmutt-icon" class="w-5 h-5 md:w-6 md:h-6 opacity-40" />
			{/snippet}
		</Input>

		<Input
			label="ชื่อ - นามสกุล"
			bind:value={formData.fullName}
			placeholder="นาย/นาง สมชาย รักโน๊ต"
			error={errors.fullName}
		/>

		<Input
			label="เบอร์ติดต่อ"
			bind:value={formData.phone}
			placeholder="ไม่จำเป็นต้องใส่ครับน้อง"
			error={errors.phone}
		/>
	</div>

	<div class="space-y-6 md:space-y-8">
		<Input
			label="รหัสนักศึกษา"
			placeholder="68130500XXX"
			error={errors.studentId}
			bind:value={formData.studentId}
		/>

		<Input
			label="ชื่อเล่น"
			placeholder="BESTLOVENOEY"
			error={errors.nickname}
			bind:value={formData.nickname}
		/>

		<Input
			label="ชื่อดิสคอร์ด"
			placeholder="example#0001"
			error={errors.discord}
			bind:value={formData.discord}
		>
			{#snippet icon()}
				<img src={Input_Discord} alt="discord-icon" class="w-5 h-5 md:w-6 md:h-6 opacity-50" />
			{/snippet}
		</Input>
	</div>
</div>

<div class="mt-10">
	{#if errors.major}
		<p class="font-semibold mb-4 text-base text-center text-red-500 md:text-xl">
			{errors.major}
		</p>
	{:else}
		<h3 class="font-semibold mb-4 text-base text-center md:text-xl">สาขา</h3>
	{/if}

	<div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
		{#each departments as dept (dept)}
			<button
				type="button"
				onclick={() => (formData.major = dept)}
				class={cn(
					'rounded-2xl px-6 py-4 text-left font-semibold transition-all duration-200 border cursor-pointer',
					formData.major === dept
						? 'bg-yellow-950 text-yellow-400 border-yellow-400'
						: 'bg-[#3A3A3A] border-white/30 hover:border-white/70'
				)}
			>
				{dept}
			</button>
		{/each}
	</div>
</div>

<div class="mt-10">
	{#if errors.track}
		<p class="font-semibold mb-4 text-base text-center text-red-500 md:text-xl">
			{errors.track}
		</p>
	{:else}
		<h3 class="font-semibold mb-4 text-base text-center md:text-xl">เลือกได้</h3>
	{/if}

	<div class="grid grid-cols-4 gap-3">
		{#each tracks as track (track.name)}
			<button type="button" onclick={() => (formData.track = track.name)} class="relative">
				<img src={track.normal} alt={track.name} />

				<img
					src={track.active}
					alt={track.name}
					class={cn(
						'absolute inset-0 transition-opacity duration-300 ease-out',
						!formData.track || formData.track === track.name ? 'opacity-100' : 'opacity-0'
					)}
				/>
			</button>
		{/each}
	</div>
</div>

<div class="flex gap-4 pt-8 justify-center">
	<Button variant="ghost" className={cn(['w-[150px] md:w-[300px]'])} fun={handleBack}
		>ย้อนกลับ</Button
	>
	<Button variant="primary" className={cn(['w-[150px] md:w-[300px]'])} fun={next}>ถัดไป</Button>
</div>
