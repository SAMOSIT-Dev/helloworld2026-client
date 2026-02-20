<script module lang="ts">
	export type QuizData = {
		id: string | number;
		title: string;
		answers?: { id: string | number; label: string; value: string }[];
	};

	export type Selected = {
		id: QuizData['id'];
		answer: string;
		choiceId: QuizData['id'];
	};
</script>

<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	import { cn } from '$lib/utils/utility-util';

	import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';
	import _ from 'lodash';

	let {
		data,
		selected = $bindable([]),
		totalQuestion,
		pageIndex = $bindable(0),
		isFinished = $bindable(false)
	}: {
		data: QuizData[];
		selected?: Selected[];
		pageIndex: number;
		totalQuestion: number;
		isFinished?: boolean;
	} = $props();

	let questionIndex = $state<number>(0);

	const selectedQuestion = $derived<QuizData>(data[pageIndex]);
	const hasChoice = $derived<boolean>(
		(selectedQuestion?.answers && selectedQuestion.answers.length > 0) || false
	);

	function updateAnswer(
		questionId: Selected['id'],
		choiceId: Selected['choiceId'],
		value: Selected['answer']
	) {
		selected = selected.some((item) => item.id === questionId)
			? selected.map((item) =>
					item.id === questionId ? { ...item, choiceId, answer: value } : item
				)
			: [...selected, { id: questionId, choiceId, answer: value }];

		if (selected.length === totalQuestion) {
			isFinished = true;
		}
	}

	function isIntro(page: QuizData) {
		return page.id?.toString().startsWith('intro');
	}

	function updateQuestionIndex() {
		questionIndex = data.slice(0, pageIndex + 1).filter((page) => !isIntro(page)).length - 1;
	}

	function goToPage(index: number) {
		if (index < 0 || index >= data.length) return;

		scrollTo({ top: 0, behavior: 'smooth' });
		pageIndex = index;
		updateQuestionIndex();
	}

	function next() {
		goToPage(pageIndex + 1);
	}

	function previous() {
		goToPage(pageIndex - 1);
	}

	function isSelected(choiceId: Selected['id']) {
		return selected.some((item) => _.isEqual(item.choiceId, choiceId));
	}

	$effect(() => {
		if (selected.length === 0) {
			questionIndex = 0;
			pageIndex = 0;
		}
	});
</script>

<div>
	<h1 class={cn('text-4xl font-bold', !hasChoice && 'hidden')}>Question {questionIndex + 1}</h1>
	<p class="text-left text-lg xl:text-xl mt-7">
		{selectedQuestion.title}
	</p>
	{#if hasChoice}
		<div class="grid lg:grid-cols-2 gap-4 mt-10">
			{#each selectedQuestion.answers as choice}
				<label>
					<input
						type="radio"
						onchange={() => updateAnswer(selectedQuestion.id, choice.id, choice.value)}
						value={choice.value}
						name="choice"
						checked={isSelected(choice.id)}
						class="sr-only peer"
					/>
					<div
						class="relative rounded-[10px] border border-[#A7A7A7] bg-[#4A4A4A] p-5 text-left h-20 overflow-x-auto overflow-y-hidden flex justify-start items-center peer-checked:bg-[#3B3415] peer-checked:border-[#EFC30A] select-none text-sm cursor-pointer transition-all ease-in-out duration-300"
					>
						<p class="w-full">
							{choice.label}
						</p>
					</div>
				</label>
			{/each}
		</div>
	{/if}
	<div class="grid lg:grid-cols-2 w-full lg:w-max lg:mx-auto mx-0 mt-10 gap-5">
		<Button
			disabled={pageIndex == 0}
			variant="ghost"
			className="w-full lg:w-55.5 bg-[#282828] justify-center rounded-[10px]"
			fun={previous}
		>
			<ArrowLeftIcon class="mr-2" /> Previous
		</Button>
		<Button
			disabled={pageIndex === data.length - 1}
			variant="ghost"
			className="w-full lg:w-55.5 bg-[#282828] justify-center rounded-[10px]"
			fun={next}
		>
			Next <ArrowRightIcon class="ml-2" />
		</Button>
	</div>
</div>
