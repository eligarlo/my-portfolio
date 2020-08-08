<template>
	<div id="app">
		<TheNavigation />
		<router-view />
	</div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue"

export default {
	components: {
		TheNavigation,
	},
}
</script>

<style lang="scss">
@import "@/styles/App.scss";
</style>
