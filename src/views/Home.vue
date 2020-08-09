<template>
	<main class="home">
		<div class="hero">
			<img :src="require(`@/assets/img/portrait.svg`)" alt="Eliahu's Portrait" />
			<div class="header-text">
				<h1 class="lg-heading">
					Eliahu
					<span class="text-secondary">Garcia Lozano</span>
				</h1>
				<h2 class="sm-heading">
					<TypeAnimation staticText="I'm a" :typeArray="typingArray" />
				</h2>
				<div class="social-icons">
					<a href="https://twitter.com/eligarlo" target="_blank">
						<FontAwesome :icon="['fab', 'twitter']" size="2x" />
					</a>
					<a href="https://www.linkedin.com/in/eliahu-garcia-lozano/" target="_blank">
						<FontAwesome :icon="['fab', 'linkedin']" size="2x" />
					</a>
					<a href="https://github.com/eligarlo" target="_blank">
						<FontAwesome :icon="['fab', 'github']" size="2x" />
					</a>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import TypeAnimation from "@/components/TypeAnimation.vue"
export default {
	components: {
		TypeAnimation,
	},
	data() {
		return {
			typingArray: [
				"Husband & Father.",
				"Web Developer.",
				"Vuejs fan.",
				"Sport lover.",
				"Book Reader.",
			],
		}
	},
	methods: {
		toggleBodyClass(addRemoveClass, className) {
			const el = document.body

			if (addRemoveClass === "addClass") {
				el.classList.add(className)
			} else {
				el.classList.remove(className)
			}
		},
	},
	mounted() {
		this.toggleBodyClass("addClass", "bg-img")
	},
	destroyed() {
		this.toggleBodyClass("removeClass", "bg-img")
	},
}
</script>

<style lang="scss" scoped>
@import "@/styles/views/Home.scss";
</style>
