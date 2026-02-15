<script lang="ts">
	import VineLeft from '$lib/assets/images/decoration/VineLeft.png';
	import VineRight from '$lib/assets/images/decoration/VineRight.png';
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils/utility-util';

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
	<div class={cn('fixed inset-0 z-50 flex items-center justify-center', 'bg-black/50')}>
		<div
			class={cn(
				'w-[900px] max-h-[90vh]',
				'flex flex-col',
				'rounded-[20px]',
				'border border-[#A7A7A7]',
				'bg-[#282828C9]',
				'backdrop-blur-[31px]',
				'text-white text-center',
				'p-6 overflow-hidden'
			)}
		>
			<h2 class="mb-6 text-lg font-semibold">แบบฟอร์มสมัครโครงการ SIT HELLO WORLD</h2>

			<div class="flex-1 overflow-y-auto px-4">
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
				sit error natus repudiandae quia sint tempora harum culpa obcaecati placeat incidunt
				asperiores vitae atque? Dicta soluta vitae, corrupti fuga harum, doloremque exercitationem
				veniam tempora quam nisi aliquid consectetur explicabo saepe. Quam, quidem. Harum eum natus
				eveniet, omnis adipisci laborum! asperiores, error, dicta officia necessitatibus possimus
				commodi voluptatem ab deleniti odio neque dolore, nisi atque non rem voluptatibus? Eos,
				quod! Magnam nostrum dolores esse in ipsa. Velit nihil fugiat aspernatur perferendis, neque
				modi maxime minus in sit error natus repudiandae quia sint tempora harum culpa obcaecati
				placeat incidunt asperiores vitae atque? Dicta soluta vitae, corrupti fuga harum, doloremque
				exercitationem veniam tempora quam nisi aliquid consectetur explicabo saepe. Quam, quidem.
				Harum eum natus eveniet, omnis adipisci laborum!asperiores, error, dicta officia
				necessitatibus possimus commodi voluptatem ab deleniti odio neque dolore, nisi atque non rem
				voluptatibus? Eos, quod! Magnam nostrum dolores esse in ipsa. Velit nihil fugiat aspernatur
				perferendis, neque modi maxime minus in sit error natus repudiandae quia sint tempora harum
				culpa obcaecati placeat incidunt asperiores vitae atque? Dicta soluta vitae, corrupti fuga
				harum, doloremque exercitationem veniam tempora quam nisi aliquid consectetur explicabo
				saepe. Quam, quidem. Harum eum natus eveniet, omnis adipisci laborum!asperiores, error,
				dicta officia necessitatibus possimus commodi voluptatem ab deleniti odio neque dolore, nisi
				atque non rem voluptatibus? Eos, quod! Magnam nostrum dolores esse in ipsa. Velit nihil
				fugiat aspernatur perferendis, neque modi maxime minus in sit error natus repudiandae quia
				sint tempora harum culpa obcaecati placeat incidunt asperiores vitae atque? Dicta soluta
				vitae, corrupti fuga harum, doloremque exercitationem veniam tempora quam nisi aliquid
				consectetur explicabo saepe. Quam, quidem. Harum eum natus eveniet, omnis adipisci laborum!
			</div>

			<div class="mt-10 flex justify-center gap-4 font-semibold">
				<button
					on:click={handleClose}
					class={cn(
						'w-[300px]',
						'px-8 py-3 rounded-full',
						'border-2 border-[#E3E3E3]',
						'bg-gradient-to-b from-[#333333] to-[#A8A8A8]',
						'text-white',
						'cursor-pointer'
					)}
				>
					ไม่ยินยอม
				</button>

				<div
					class={cn(
						'p-[4px]',
						'rounded-full',
						'bg-gradient-to-b from-[#BB5B0D] via-[#673311] to-[#391D0C]'
					)}
				>
					<button
						on:click={handleOk}
						class={cn(
							'relative',
							'w-[300px]',
							'px-8 py-3 rounded-full',
							'bg-gradient-to-b from-[#F6DD54] via-[#EFC30A] to-[#E4910A]',
							'text-[#391D0C]',
							'cursor-pointer',
							'font-bold text-xl'
						)}
					>
						<img
							src={VineLeft}
							alt="vine-left"
							class="absolute -top-2 -left-1 w-[83px] pointer-events-none"
						/>

						<img
							src={VineRight}
							alt="vine-right"
							class="absolute -top-7 -right-2 w-[60px] pointer-events-none"
						/>

						<span class="tracking-wide"> ยินยอม </span>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
