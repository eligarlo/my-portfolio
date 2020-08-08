<template>
	<header>
		<div>
			<div @click="showMenuState" class="menu-btn" :class="{ 'close': showMenu }">
				<div class="btn-line"></div>
				<div class="btn-line"></div>
				<div class="btn-line"></div>
			</div>
		</div>

		<nav class="menu" :class="{ 'show': showMenu }">
			<ul class="menu-nav" :class="{ 'show': showMenu }">
				<li class="nav-item" :class="{ 'show': showMenu }">
					<router-link @click.native="showMenuState" class="nav-link" to="/">Home</router-link>
				</li>
				<li class="nav-item" :class="{ 'show': showMenu }">
					<router-link @click.native="showMenuState" class="nav-link" to="/about">About Me</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			showMenu: false,
		}
	},
	methods: {
		showMenuState() {
			return (this.showMenu = !this.showMenu)
		},
	},
}
</script>

<style lang="scss" scoped>
@import "@/styles/components/TheNavigation.scss";
</style>