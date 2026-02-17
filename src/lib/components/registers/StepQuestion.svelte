<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import type { FormSchema } from '$lib/utils/shema';
	import { cn } from '$lib/utils/utility-util';
	import { fa } from 'zod/locales';

	let {
		formData = $bindable(),
		errors,
		next,
		back,
		submit,
		validate
	} = $props<{
		formData: FormSchema;
		errors: any;
		next: () => void;
		back: () => void;
		submit: () => void;
		validate: () => void;
	}>();

	const questions = [
		'อะไรเป็นเหตุผลที่ทำให้น้องเข้าร่วมกิจกรรม Hello World และเลือกสมัครในฝ่ายนี้',
		'น้องพอจะมีทักษะพื้นฐาน หรือเคยมีประสบการณ์ทำอะไรมาก่อนที่เกี่ยวข้องกับฝ่ายที่สมัครมาไหมครับ',
		'ถ้าการเข้ากิจกรรม Hello World มีความยาก และ เหนื่อยในการเรียนรู้สิ่งใหม่ๆในสิ่งที่ไม่เคยทำมาก่อนน้องจะมีวิธีรับมือหรือแก้ไขปัญไงบ้าง',
		'น้องๆสามารถทำงานร่วมกับผู้อื่นได้ไหม ถ้าเกิดมีปัญหาในทีมในช่วงระหว่างการพัฒนาโปรเจคน้องจะมีวิธีการสื่อสาร หรือแก้ไขปัญหาทีเกิดขึ้นอย่างไร',
		'กิจกรรม Hello World จัดขึ้นเพื่อการเรียนรู้ ลองผิดลองถูก มากกว่าแข่งขัน สิ่งที่น้องคาดหวังว่าจะได้รับติดตัวกลับไปที่สุดหลังจากจบค่ายนี้ คืออะไรครับ'
	];

	const questionKeys = [
		'question_1',
		'question_2',
		'question_3',
		'question_4',
		'question_5'
	] as const;

	let confirmForm = $state(false);

	const handleConfirmForm = () => {
		if (validate()) {
			confirmForm = true;
		}
	};

	const submitForm = () => {
		confirmForm = false;
		submit();
	};
</script>

<div class={cn('space-y-15')}>
	<div class={cn('space-y-6')}>
		{#each questions as question, i}
			{@const key = questionKeys[i]}
			<div class="text-2xl">คำถามที่ {i + 1}</div>
			<div class="text-xl">{question}</div>

			<Input bind:value={formData[key] as string} error={errors[key]} />
		{/each}
	</div>

	<div class={cn('flex gap-4 pt-4 justify-center')}>
		<Button variant="ghost" className={cn(['w-[150px] md:w-[300px]'])} fun={back}>ย้อนกลับ</Button>
		<Button variant="primary" className={cn(['w-[150px] md:w-[300px]'])} fun={handleConfirmForm}
			>ส่งฟอร์ม</Button
		>
	</div>
</div>

<Modal bind:show={confirmForm} title="จะล่งแล้วจริงๆๆ หรอ">
	<div class="text-center space-y-4">
		<p class="text-lg">น้องตรวจสอบคำตอบครบถ้วนแล้วใช่ไหมครับ?</p>
		<p class="text-sm text-gray-400">เมื่อส่งแล้วจะไม่สามารถกลับมาแก้ไขได้อีกนะ</p>
	</div>
	<div class="flex items-center justify-center gap-3">
		<Button
			variant="ghost"
			className={cn(['w-[150px] md:w-[300px]'])}
			fun={() => (confirmForm = false)}>ย้อนกลับ</Button
		>
		<Button variant="primary" className={cn(['w-[150px] md:w-[300px]'])} fun={submitForm}
			>ส่งฟอร์ม</Button
		>
	</div>
</Modal>
