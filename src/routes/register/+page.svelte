<script lang="ts">
	import { goto } from '$app/navigation';
	import StepForm from '$lib/components/registers/StepForm.svelte';
	import StepQuestion from '$lib/components/registers/StepQuestion.svelte';
	import StepSuccess from '$lib/components/registers/StepSuccess.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import getZodErrors from '$lib/utils/get-zod-errors';
	import { formRegister, type FormSchema } from '$lib/utils/shema';
	import { cn } from '$lib/utils/utility-util';
	let step = $state(3);
	let submitAttempted = $state(false);
	let isLoading = $state<boolean>(true);
	let formData = $state<FormSchema>({
		email: '',
		studentId: '',
		fullName: '',
		nickname: '',
		phone: '',
		discord: '',
		major: '',
		track: '',
		question_1: '',
		question_2: '',
		question_3: '',
		question_4: '',
		question_5: ''
	});
	let contentElement = $state<HTMLElement | null>(null);
	let errors = $derived.by(() => {
		const result = formRegister.safeParse(formData);
		const err = result.success ? {} : getZodErrors(result.error);
		return { ...err, _submitAttempted: submitAttempted };
	});

	$effect(() => {
		if (step && contentElement) {
			contentElement.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});

	const isStepOneValid = () => {
		const result = formRegister
			.pick({
				email: true,
				studentId: true,
				fullName: true,
				nickname: true,
				phone: true,
				discord: true,
				major: true,
				track: true
			})
			.safeParse(formData);
		return result.success;
	};

	const isStepTwoValid = () => {
		const result = formRegister
			.pick({
				question_1: true,
				question_2: true,
				question_3: true,
				question_4: true,
				question_5: true
			})
			.safeParse(formData);
		return result.success;
	};

	const next = () => {
		if (step === 1) {
			submitAttempted = true;
			if (!isStepOneValid()) return false;
			step = 2;
			submitAttempted = false;
			return true;
		}
	};

	const submitForm = async () => {
		submitAttempted = true;
		if (!isStepTwoValid()) return;
		isLoading = true;
		step = 3;

		const body = new FormData();
		Object.entries(formData).forEach(([key, value]) => {
			body.append(key, value as string);
		});

		try {
			const response = await fetch('?/register', {
				method: 'POST',
				body
			});

			const result = await response.json();

			if (response.ok && result.type === 'success') {
				isLoading = false;
			} else {
				step = 2;
				isLoading = false;
			}
		} catch (e) {
			step = 2;
			isLoading = false;
		}
	};

	const back = () => {
		if (step > 1) step--;
	};

	let isModalOpen = $state(true);
	let isPolicyAccepted = $state(false);
	const handleDecline = () => {
		isModalOpen = false;
		goto('/');
	};

	const handleAccept = () => {
		isModalOpen = false;
		isPolicyAccepted = true;
	};
</script>

<Modal bind:show={isModalOpen} title="แบบฟอร์มสมัครโครงการ SIT HELLO WORLD">
	<div class={cn('flex-1 overflow-y-auto px-6 py-8 text-left space-y-6 leading-relaxed')}>
		<section class="space-y-2">
			<h3 class="font-semibold text-base md:text-lg">
				1. วัตถุประสงค์ในการเก็บรวบรวมข้อมูลส่วนบุคคล
			</h3>
			<p>
				โครงการ "เปิดโลกแห่งการเรียนรู้ สู่นักไอทีมืออาชีพ (SIT Hello World)"
				มีความจำเป็นต้องเก็บรวบรวมข้อมูลส่วนบุคคลของผู้เข้าร่วมโครงการ เพื่อวัตถุประสงค์ดังต่อไปนี้:
			</p>
			<ul class="list-disc pl-10 space-y-1">
				<li>เพื่อการลงทะเบียนและยืนยันตัวตนของผู้เข้าร่วมโครงการ</li>
				<li>บริหารจัดการและวางแผนกิจกรรมต่าง ๆ ที่เกี่ยวข้องกับโครงการ</li>
				<li>ติดตามและประเมินผลการเข้าร่วมโครงการ</li>
				<li>ประสานงานและแจ้งข้อมูลสำคัญที่เกี่ยวข้องกับกิจกรรม</li>
				<li>บันทึกภาพถ่าย วิดีโอ และสื่ออื่น ๆ เพื่อใช้ในการประชาสัมพันธ์และรายงานผล</li>
			</ul>
		</section>

		<section class="space-y-2">
			<h3 class="font-semibold text-base md:text-lg">2. ประเภทของข้อมูลส่วนบุคคลที่เก็บรวบรวม</h3>
			<p>โครงการจะเก็บรวบรวมข้อมูลส่วนบุคคลดังต่อไปนี้:</p>
			<ul class="list-disc pl-10 space-y-1">
				<li>ชื่อ – นามสกุล</li>
				<li>รหัสนักศึกษา</li>
				<li>สาขาวิชา</li>
				<li>ข้อมูลการติดต่อ เช่น เบอร์โทรศัพท์ และอีเมล</li>
				<li>ข้อมูลการเข้าร่วมกิจกรรม</li>
				<li>ภาพถ่าย เสียง และวิดีโอที่บันทึกระหว่างการเข้าร่วมโครงการ</li>
			</ul>
		</section>

		<section class="space-y-2">
			<h3 class="font-semibold text-base md:text-lg">3. ระยะเวลาในการเก็บรักษาข้อมูล</h3>
			<p>
				ผู้ดำเนินโครงการจะเก็บรักษาข้อมูลส่วนบุคคลไว้เท่าที่จำเป็น ตามวัตถุประสงค์ของโครงการ
				และจะดำเนินการลบหรือทำลายข้อมูล เมื่อสิ้นสุดระยะเวลาดังกล่าว
			</p>
		</section>
	</div>

	{#snippet footer()}
		<div class={cn('mt-10', 'flex justify-center', 'gap-4', 'font-semibold')}>
			<Button variant="ghost" className={cn(['w-[150px] md:w-[300px]'])} fun={handleDecline}
				>ไม่ยินยอม</Button
			>
			<Button variant="primary" className={cn(['w-[150px] md:w-[300px]'])} fun={handleAccept}
				>ยินยอม</Button
			>
		</div>
	{/snippet}
</Modal>

{#if isPolicyAccepted}
	<Modal bind:show={isPolicyAccepted} title="แบบฟอร์มสมัครโครงการ SIT HELLO WORLD">
		<div
			bind:this={contentElement}
			class={cn('flex-1 overflow-y-auto px-6 py-4 custom-scrollbar max-h-[70vh]')}
		>
			{#if step === 1}
				<StepForm bind:formData {errors} {next} />
			{:else if step === 2}
				<StepQuestion validate={isStepTwoValid} bind:formData {errors} {back} submit={submitForm} />
			{:else}
				<StepSuccess {isLoading} />
			{/if}
		</div>
	</Modal>
{/if}
