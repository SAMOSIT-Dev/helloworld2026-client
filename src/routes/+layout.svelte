<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import banner from '$lib/assets/est_6.png';

	import logo from '$lib/assets/images/logo/hello-logo.svg';

	import '$lib/styles/global.css';
	import NavBar from '$lib/components/shared/navbar/NavBar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
	<title>SIT HelloWorld 2026</title>
	<meta property="og:title" content="SIT HelloWorld 2026" />
	<meta
		name="description"
		content="ยินดีต้อนรับสู่ SIT HelloWorld 2026 ที่นี่มีความลับเจ๋งๆ ของโลกไอทีรอให้พวกเจ้ามาไขปริศนาเพียบ! มีทั้งขุมทรัพย์ความรู้และมิตรภาพ กำลังรอเจ้าอยู่ข้างใน"
	/>
	<meta
		property="og:description"
		content="ยินดีต้อนรับสู่ SIT HelloWorld 2026 ที่นี่มีความลับเจ๋งๆ ของโลกไอทีรอให้พวกเจ้ามาไขปริศนาเพียบ! มีทั้งขุมทรัพย์ความรู้และมิตรภาพ กำลังรอเจ้าอยู่ข้างใน"
	/>
	<meta property="og:image" content={banner} />
</svelte:head>

{@render children()}
