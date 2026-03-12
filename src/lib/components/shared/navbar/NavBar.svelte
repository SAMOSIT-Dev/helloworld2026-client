<script lang="ts">
	import DesktopNavBar from './DesktopNavBar.svelte';
	import MobileNavBar from './MobileNavBar.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { tick } from 'svelte';

	const sections: { name: string; id: string }[] = [
		{ name: 'หน้าหลัก', id: 'hero' },
		{ name: 'เกี่ยวกับค่าย', id: 'about' },
		{ name: 'สาขาในค่าย', id: 'branches' },
		{ name: 'กำหนดการ', id: 'schedule' }
	];

	const handleScrollIntoView = (id: string) => {
		if (!browser) return;

		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	function navigateToSchedule() {
		goto('/schedule');
	}

	function navigateToRegister() {
		goto('/register');
	}

	async function navigateOrScrollToSection(id: string) {
		if ($page.url.pathname !== '/') {
			await goto('/');
			await tick();
		}
		handleScrollIntoView(id);
	}
</script>

<DesktopNavBar {sections} {navigateToSchedule} {navigateToRegister} {navigateOrScrollToSection} />
<MobileNavBar {sections} {navigateToSchedule} {navigateToRegister} {navigateOrScrollToSection} />
