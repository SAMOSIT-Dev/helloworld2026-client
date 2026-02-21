<script>
	import AboutSection from '$lib/components/pages/landing-page/about-scetion/AboutSection.svelte';
	import BranchSection from '$lib/components/pages/landing-page/branch-section/BranchSection.svelte';
	import CTA2 from '$lib/components/pages/landing-page/CTA2.svelte';
	import Footer from '$lib/components/pages/landing-page/Footer.svelte';
	import HeroSection from '$lib/components/pages/landing-page/HeroSection.svelte';
	import Schedule from '$lib/components/pages/landing-page/Schedule.svelte';
	import NavBar from '$lib/components/shared/navbar/NavBar.svelte';
</script>

<NavBar />

<div class="h-screen w-screen overflow-x-hidden">
	<main>
		<section id="hero"><HeroSection /></section>
		<section id="about"><AboutSection /></section>
		<section id="branches"><BranchSection /></section>
		<section id="schedule"><Schedule /></section>
		<section id="cta2"><CTA2 /></section>
	</main>
	<footer>
		<Footer />
	</footer>
</div>
