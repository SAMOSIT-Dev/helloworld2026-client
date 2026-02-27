<script lang="ts">
	import DesktopAbout, { type SponsorType } from './DesktopAbout.svelte';
	import MobileAbout from './MobileAbout.svelte';
	import uxuiIcon from '$lib/assets/images/branch/uxui-icon.svg';
	import databaseIcon from '$lib/assets/images/branch/database-icon.svg';
	import frontendIcon from '$lib/assets/images/branch/frontend-icon.svg';
	import backendIcon from '$lib/assets/images/branch/backend-icon.svg';

	import LactasoyBranding from '$lib/assets/images/sponsor/Lactasoy.png';
	import OQUBranding from '$lib/assets/images/sponsor/OQU.png';
	import LoongnhoomSquareBranding from '$lib/assets/images/sponsor/Loongnhoom_Square.png';

	let currentIcon = $state(0);

	const icons: {
		name: string;
		icon: string;
		description: string;
		fontsize?: string;
		fontSizeMobile?: string;
		fontSizeTablet?: string;
	}[] = [
		{
			name: 'UX/UI',
			icon: uxuiIcon,
			description: 'ถ้าชอบการออกแบบและการแก้ปัญหาให้คนอื่น สายนี้ถือตอบโจทย์',
			fontsize: 'xl:text-[140px]',
			fontSizeTablet: 'md:text-[100px]',
			fontSizeMobile: 'text-[30px]'
		},
		{
			name: 'Database',
			icon: databaseIcon,
			description:
				'ฝ่าย Database จะพาไปเรียนรู้ตั้งแต่พื้นฐานการจัดการข้อมูล ไปจนถึงการนำข้อมูลไปใช้จริง พร้อม Workshop ให้ได้ลองทำจริง',
			fontsize: 'xl:text-[110px]',
			fontSizeTablet: 'md:text-[65px]',
			fontSizeMobile: 'text-[24px]'
		},
		{
			name: 'Frontend',
			icon: frontendIcon,
			description: 'ทำไมบางเว็บไซต์ถึงดูสวย ลื่นไหล และน่าใช้งานตั้งแต่ครั้งแรกที่เปิด?',
			fontsize: 'xl:text-[110px]',
			fontSizeTablet: 'md:text-[65px]',
			fontSizeMobile: 'text-[24px]'
		},
		{
			name: 'Backend',
			icon: backendIcon,
			description:
				'สำหรับน้องๆทุกคนที่ เขียนโค้ดไม่คล่อง มนุษย์ต่างดาวมาจีบ หรือ ไดโนเสาร์มาบุกบ้านก็ไม่ต้องกลัว พี่ๆพร้อม',
			fontsize: 'xl:text-[120px]',
			fontSizeTablet: 'md:text-[70px]',
			fontSizeMobile: 'text-[26px]'
		}
	];

	const sponsors: SponsorType[] = [
		{
			type: 'img',
			src: LactasoyBranding,
			alt: 'Lactasoy'
		},
		{
			type: 'img',
			src: OQUBranding,
			alt: 'OQU'
		},
		{
			type: 'img',
			src: LoongnhoomSquareBranding,
			alt: 'loongnhoom_square'
		}
	];

	const carouselIcon = (dir: number) => {
		currentIcon = (currentIcon + dir + icons.length) % icons.length;
	};
</script>

<DesktopAbout {sponsors} {currentIcon} {carouselIcon} {icons} />
<MobileAbout {sponsors} {currentIcon} {carouselIcon} {icons} />
