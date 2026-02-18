<script lang="ts">
	import DesktopNavBar from './DesktopNavBar.svelte';
	import MobileNavBar from './MobileNavBar.svelte';
	import { browser } from '$app/environment';

	const sections: { name: string; section: string }[] = [
		{ name: 'หน้าหลัก', section: 'hero' },
		{ name: 'เกี่ยวกับค่าย', section: 'about' },
		{ name: 'สาขาในค่าย', section: 'branches' },
		{ name: 'กำหนดการ', section: 'schedule' }
	];

	const handleScrollIntoView = (section: string) => {
		if (!browser) return;

		const el = document.getElementById(section);
		el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
</script>

<DesktopNavBar {sections} {handleScrollIntoView} />
<MobileNavBar {sections} {handleScrollIntoView} />
