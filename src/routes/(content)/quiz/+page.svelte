<script lang="ts">
	import _ from 'lodash';
	import { ArrowLeftIcon } from '@lucide/svelte';

	import ProgressionBar from '$lib/components/pages/quiz-page/ProgressionBar.svelte';
	import Question, {
		type Selected,
		type QuizData
	} from '$lib/components/pages/quiz-page/Question.svelte';
	import QuizResultCard, {
		fullTrackNameMapping
	} from '$lib/components/pages/quiz-page/QuizResultCard.svelte';
	import { cn } from '$lib/utils/utility-util';
	import Button from '$lib/components/ui/Button.svelte';
	import type { PageData, PageProps } from './$types';
	import { goto } from '$app/navigation';

	const tracks = ['UX/UI', 'FE', 'BE', 'DB'] as const;

	type Tracks = (typeof tracks)[number];
	type Choices = 'A' | 'B' | 'C' | 'D';

	const { data }: { data: PageData } = $props();

	const questions = () => data.questions;

	let percentage = $state<number>(0);
	let pageIndex = $state<number>(0);
	let evaluationResult = $state<Tracks | null>(null);
	let selected = $state<Selected[]>([]);

	const trackDescription: Record<Tracks, string> = {
		BE: 'ผู้กุมความลับหลังกำแพงหิน ควบคุมฟันเฟืองและตรรกะอันซับซ้อน',
		FE: 'ผู้เปลี่ยนแผ่นจารึกและแผนที่ให้กลายเป็นเส้นทางที่สัมผัสได้จริง',
		DB: 'นักถอดรหัสผู้มองทะลุทุกความยุ่งเหยิง และค้นหาขุมทรัพย์ข้อมูลที่ซ่อนอยู่ในกองจารึก',
		'UX/UI': 'ผู้เนรมิตลายแทงและวิถีแห่งการเดินทาง'
	};

	const questionSize = () => data.totalSize;

	function getEvaluationResult() {
		const trackEvalMap: Record<Choices, Tracks> = {
			A: 'FE',
			B: 'BE',
			C: 'DB',
			D: 'UX/UI'
		};

		const counts = selected.reduce<Record<string, number>>(
			(acc, { answer }) => {
				acc[answer] = (acc[answer] ?? 0) + 1;
				return acc;
			},
			{} as Record<string, number>
		);

		let highestChoice: Choices | null = null;
		let highestCount = 0;

		for (const [choice, count] of Object.entries(counts) as [Choices, number][]) {
			if (count > highestCount) {
				highestCount = count;
				highestChoice = choice;
			}
		}

		evaluationResult = highestChoice !== null ? trackEvalMap[highestChoice] : null;
	}

	function resetQuizEvaluation() {
		evaluationResult = null;
		selected = [];
	}

	function goToRegisterPage() {
		goto('/register');
	}
</script>

{#snippet resultSection()}
	{#if evaluationResult}
		<div class="flex w-full pl-0 justify-center lg:justify-start lg:pl-31">
			<div class="w-auto">
				<QuizResultCard varaints={evaluationResult} />
			</div>
			<div
				class={cn(
					'flex flex-col w-full justify-center items-center my-20 p-0 lg:p-10',
					'absolute bottom-0 left-0 right-0 lg:relative'
				)}
			>
				<h1 class="text-7xl uppercase font-semibold max-lg:hidden">
					{fullTrackNameMapping[evaluationResult].replace(/\n/, '')}
				</h1>
				<p class="my-8 text-center px-10 text-lg lg:text-xl">
					{trackDescription[evaluationResult]}
				</p>
				<div class="flex items-center relative space-x-3">
					<Button
						variant="ghost"
						className="w-40 lg:w-51 bg-[linear-gradient(180deg,rgba(51,51,51,0.46)_3.75%,rgba(168,168,168,0.46)_100%)] backdrop-blur-[6.4px] border-2"
						fun={resetQuizEvaluation}>ลองเล่นใหม่?</Button
					>
					<Button variant="primary" className="w-40 lg:w-51" fun={goToRegisterPage}>เสร็จสิน</Button
					>
				</div>
			</div>
		</div>
	{/if}
{/snippet}

{#snippet evaluationSection()}
	<div class="w-full h-full p-6 py-10 md:p-12 md:py-18">
		<div class="flex items-center">
			<button class="cursor-pointer max-md:hidden mr-5 md:mr-10 lg:mr-17">
				<ArrowLeftIcon class="size-10 md:size-12.5" />
			</button>
			<ProgressionBar
				className="w-[calc(100%-50px)]"
				totalQuestion={questions().length}
				currentQuestion={pageIndex + 1}
				bind:percentage
			/>
			<span class="text-lg md:text-2xl font-medium wrap-break-wor ml-5 md:ml-10 lg:ml-17"
				>{percentage}%</span
			>
		</div>
		<div class="text-center my-10">
			<Question data={questions()} totalQuestion={questionSize()} bind:pageIndex bind:selected />
		</div>
		{#if selected.length === questionSize()}
			<div class="flex items-center justify-center">
				<Button className="w-51" variant="primary" fun={getEvaluationResult}>Finish</Button>
			</div>
		{/if}
	</div>
{/snippet}

{#if evaluationResult}
	{@render resultSection()}
{:else}
	{@render evaluationSection()}
{/if}
