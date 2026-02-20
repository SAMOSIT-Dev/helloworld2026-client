<script lang="ts">
	import DesktopBranch from './DesktopBranch.svelte';
	import uxuiIcon from '$lib/assets/images/branch/uxui-icon.svg';
	import databaseIcon from '$lib/assets/images/branch/database-icon.svg';
	import frontendIcon from '$lib/assets/images/branch/frontend-icon.svg';
	import backendIcon from '$lib/assets/images/branch/backend-icon.svg';
	import dirtFloor from '$lib/assets/images/decoration/dirt-floor.svg';
	import beShadow from '$lib/assets/images/branch/be-shadow.svg';
	import feShadow from '$lib/assets/images/branch/fe-shadow.svg';
	import dbShadow from '$lib/assets/images/branch/db-shadow.svg';
	import uxuiShadow from '$lib/assets/images/branch/uxui-shadow.svg';
	import beIconShadow from '$lib/assets/images/branch/be-icon-shadow.svg';
	import feIconShadow from '$lib/assets/images/branch/fe-icon-shadow.svg';
	import dbIconShadow from '$lib/assets/images/branch/db-icon-shadow.svg';
	import uxuiIconShadow from '$lib/assets/images/branch/uxui-icon-shadow.svg';
	import MobileBranch from './MobileBranch.svelte';
	import { onMount } from 'svelte';


	const icons: {
		name1: string;
		name2: string;
		backgroundColors: string[];
		icon: string;
		message: string;
		messageHover: string;
		fontSizeXl: string;
		shadow: string;
        iconShadow: string
	}[] = [
		{
			name1: 'UX/UI',
			name2: '',
			backgroundColors: ['#000000', '#38BB9B', '#48CFAE'],
			icon: uxuiIcon,
			message: '“ใครจะเป็นผู้วาดเส้นทางให้ทุกคนก้าวข้าม ไปได้อย่างปลอดภัย?”',
			messageHover:
				'“นักวางแผนเส้นทาง ผู้หยั่งรู้จิตใจนักสำรวจ และขีดเขียนแผนที่เพื่อนำทางไปสู่จุดหมาย”',
			fontSizeXl: 'xl:text-[100px]',
			shadow: uxuiShadow,
            iconShadow:uxuiIconShadow
		},
		{
			name1: 'DATA',
			name2: 'BASE',
			backgroundColors: ['#000000', '#4A89E0', '#5D9CEC'],
			icon: databaseIcon,
			message: '“ใครจะเป็นผู้จัดเก็บความลับและขุมทรัพย์ เหล่านี้ไว้ในที่ที่ปลอดภัยที่สุด?”',
			messageHover:
				'“นักถอดรหัสผู้มองทะลุทุกความยุ่งเหยิง และค้นหาขุมทรัพย์ข้อมูลที่ซ่อนอยู่ในกองจารึก”',
			fontSizeXl: 'xl:text-[100px]',
			shadow: dbShadow,
            iconShadow:dbIconShadow
		},
		{
			name1: 'FRONT',
			name2: 'END',
			backgroundColors: ['#000000', '#F4BB43', '#FFCE55'],
			icon: frontendIcon,
			message: '“ใครจะบุกเบิกและสร้างสะพานของจริง เพื่อให้เหล่านักล่าข้ามไปถึงประตูวิหาร?”',
			messageHover: '“ผู้เปลี่ยนแผ่นจารึกและแผนที่ให้กลายเป็นเส้นทางที่สัมผัสได้จริง”',
			fontSizeXl: 'xl:text-[90px]',
			shadow: feShadow,
            iconShadow:feIconShadow
		},
		{
			name1: 'BACK',
			name2: 'END',
			backgroundColors: ['#000000', '#DB4453', '#ED5564'],
			icon: backendIcon,
			message:
				'“ใครคือผู้เข้าใจตรรกะของฟันเฟืองที่ซ่อนอยู่และ รู้วิธีปลุกกลไกโบราณให้กลับมาทำงานอีกครั้ง?”',
			messageHover: '“ผู้กุมความลับหลังกำแพงหิน ควบคุมฟันเฟืองและตรรกะอันซับซ้อน”',
			fontSizeXl: 'xl:text-[100px]',
			shadow: beShadow,
            iconShadow:beIconShadow
		}
	];
</script>

<DesktopBranch {icons} {dirtFloor} />
<MobileBranch {icons} {dirtFloor} />

