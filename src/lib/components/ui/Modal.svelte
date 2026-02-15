<script lang="ts">
	import { fade } from 'svelte/transition';

	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils/utility-util';
	import Button from '$lib/components/ui/Button.svelte';
	let open: boolean = true;

	const handleClose = () => {
		open = false;
		goto('/');
	};

	const handleOk = () => {
		open = false;
		goto('/register');
	};
</script>

{#if open}
	<div
		class={cn(
			'fixed inset-0 z-50 flex items-center justify-center',
			'backdrop-blur-2xl',
			'bg-black/20'
		)}
		in:fade
		out:fade
	>
		<div
			class={cn(
				'w-[900px] max-h-[90vh]',
				'flex flex-col',
				'rounded-[20px]',
				'border border-white/20',
				'bg-[#1e1e1e]/70',
				'text-white text-center',
				'p-6 overflow-hidden'
			)}
		>
			<h2 class={cn('mb-5', 'text-lg font-semibold')}>แบบฟอร์มสมัครโครงการ SIT HELLO WORLD</h2>

			<div class={cn('flex-1', 'overflow-y-auto', 'px-4 py-15')}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum maxime eius aut
				molestias ex fugit, rem nihil quasi atque ipsum, ad eaque quod mollitia. Illum, reiciendis
				exercitationem beatae voluptates voluptas ab quibusdam deleniti doloremque quod. Eligendi
				eveniet aspernatur, hic iusto iure animi quisquam incidunt inventore deserunt provident
				minima perferendis consequuntur totam eius unde harum quasi non. Asperiores pariatur quaerat
				nam aliquam ad. Asperiores expedita architecto, recusandae obcaecati praesentium eligendi
				cum exercitationem ullam perspiciatis tenetur blanditiis sit atque repudiandae ab molestias
				numquam, nostrum, explicabo tempora! Atque, laborum unde magni neque, natus vel harum,
				veniam numquam labore deleniti odit. Deserunt rerum aspernatur quidem officia ex repellat
				culpa est. Tenetur accusamus molestias dicta minima vitae iure consequatur impedit
				architecto sed nostrum a totam culpa alias ullam dolores enim odit quae voluptas excepturi
				aperiam autem sapiente ipsum, ducimus quis. Dicta ullam vitae nesciunt tenetur voluptatibus
				ratione alias voluptates ipsum molestias aliquam nam labore quaerat sed, soluta repellat sit
				voluptas obcaecati eius ea? Tenetur reprehenderit veritatis placeat error dolores non,
				dolorum repudiandae optio. Doloremque reiciendis similique incidunt exercitationem fugit
				modi nemo, repudiandae adipisci quaerat odio blanditiis possimus praesentium, qui tempore
				inventore atque facilis nobis sit ex libero. Sit suscipit ex accusamus perferendis maxime,
				in numquam architecto, vitae rerum sapiente eaque non doloremque nisi id ipsum minus. Sed
				voluptate veritatis quisquam a. Debitis temporibus doloremque accusantium velit aut at
				asperiores, error, dicta officia necessitatibus possimus commodi voluptatem ab deleniti odio
				neque dolore, nisi atque non rem voluptatibus? Eos, quod! Magnam nostrum dolores esse in
				ipsa. Velit nihil fugiat aspernatur perferendis, neque modi maxime minus in sit error natus
				repudiandae quia sint tempora harum culpa obcaecati placeat incidunt asperiores vitae atque?
				Dicta soluta vitae, corrupti fuga harum, doloremque exercitationem veniam tempora quam nisi
				aliquid consectetur explicabo saepe. Quam, quidem. Harum eum natus eveniet, omnis adipisci
				laborum! asperiores, error, dicta officia necessitatibus possimus commodi voluptatem ab
				deleniti odio neque dolore, nisi atque non rem voluptatibus? Eos, quod! Magnam nostrum
				dolores esse in ipsa. Velit nihil fugiat aspernatur perferendis, neque modi maxime minus in
				sit error natus repudiandae quia sint tempora harum culpa
			</div>

			<div class={cn('mt-10', 'flex justify-center', 'gap-4', 'font-semibold')}>
				<Button variant="ghost" fun={handleClose}>ไม่ยินยอม</Button>
				<Button variant="primary" fun={handleOk}>ยินยอม</Button>
			</div>
		</div>
	</div>
{/if}
