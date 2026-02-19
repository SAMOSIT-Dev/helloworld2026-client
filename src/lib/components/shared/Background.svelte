<script lang="ts">
	import desktopBg from '$lib/assets/images/content-desktop-background.png';
	import mobileBg from '$lib/assets/images/content-mobile-background.png';
</script>

<picture class="fixed inset-0 -z-10">
	<source srcset={desktopBg} media="(min-width: 768px)" />
	<img src={mobileBg} alt="" class="h-full w-full object-cover" draggable="false" />
</picture>
