<script lang="ts">
    import mapBg from '$lib/assets/images/map.jpg';
	import Schedule from '$lib/components/pages/landing-page/Schedule.svelte';
    
</script>

<div>



	<div class="relative">

        <Schedule />

        

		<div class="fixed inset-0 -z-10 md:w-screen md:h-screen md:overflow-hidden">
			<img class="h-230.75 object-cover object-[30%] md:h-screen md:w-full md:scale-120" src={mapBg} alt="" />

			<div
				class="absolute inset-0 bg-[radial-gradient(57.4%_57.91%_at_50%_50%,rgba(71,71,71,0.20)_0%,rgba(0,0,0,0.50)_77.4%,#000_100%)]"
			></div>
		</div>
		
        
	</div>

</div>
