<script lang="ts">
	import DesktopAbout from './DesktopAbout.svelte';
	import MobileAbout from './MobileAbout.svelte';
	import uxuiIcon from '$lib/assets/images/branch/uxui-icon.svg';
	import databaseIcon from '$lib/assets/images/branch/database-icon.svg';
	import frontendIcon from '$lib/assets/images/branch/frontend-icon.svg';
	import backendIcon from '$lib/assets/images/branch/backend-icon.svg';

	let currentIcon = $state(0);
	

	const icons: { name: string; icon: string; description: string; fontsize?: string; fontSizeMobile?: string; fontSizeTablet?: string }[] = [
		{ name: 'UX/UI', icon: uxuiIcon, description: 'UX UI description demo test', fontsize: 'xl:text-[140px]', fontSizeTablet: 'md:text-[100px]', fontSizeMobile: 'text-[30px]' },
		{ name: 'Database', icon: databaseIcon, description: 'Database description demo test', fontsize: 'xl:text-[110px]', fontSizeTablet: 'md:text-[65px]', fontSizeMobile: 'text-[24px]' },
		{ name: 'Frontend', icon: frontendIcon, description: 'Frontend description demo test', fontsize: 'xl:text-[110px]', fontSizeTablet: 'md:text-[65px]', fontSizeMobile: 'text-[24px]' },
		{ name: 'Backend', icon: backendIcon, description: 'Backend description demo test', fontsize: 'xl:text-[120px]', fontSizeTablet: 'md:text-[70px]', fontSizeMobile: 'text-[26px]' }
	];
    
    const sponsors = ['SPONSOR1', 'SPONSOR2', 'SPONSOR3', 'SPONSOR4', 'SPONSOR5', 'SPONSOR6', 'SPONSOR7', 'SPONSOR8'];

	const carouselIcon = (dir: number) => {
		currentIcon = (currentIcon + dir + icons.length) % icons.length;
	};
</script>

<DesktopAbout {sponsors} {currentIcon} {carouselIcon} {icons} />
<MobileAbout {sponsors} {currentIcon} {carouselIcon} {icons} />


