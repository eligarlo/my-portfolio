<template>
	<main class="about">
		<div class="hero">
			<h1 class="lg-heading">Who am I?</h1>
			<p class="subtitle">
				I'm
				<span class="text-secondary">Eliahu Garcia Lozano</span> and I'm a Full Stack Web Developer.
			</p>
			<p class="subtitle">Currently working at Deloitte Israel.</p>
			<p class="subtitle">I create, build and provide solutions to customers needs and their websites.</p>
		</div>

		<!-- <img :src="require(`@/assets/img/Untitled.svg`)" alt="Godella Map" /> -->
		<div class="flex-container">
			<p>
				I'm from
				<span class="top-animation">
					where the paella is originally from
					<span class="top-animation-valencia">
						<img :src="require(`@/assets/img/valencia-map.svg`)" alt="Valencia Map" />
					</span>
				</span>, Spain. I also lived in England and currently I'm based in Israel, where I finally found my passion: Web Development.
			</p>
			<p>
				When I was almost 30 years old, I started learning web development online, and then I took a Full Stack course at John Bryce. Before I finished my studies I started working at Check Point's consumers solution team,
				<a
					class="zone-alarm"
					href="https://www.zonealarm.com"
					target="_blank"
				>ZoneAlarm</a>. Currently I'm working at
				<a
					class="deloitte"
					href="https://www2.deloitte.com/il/en.html"
					target="_blank"
				>Deloitte Israel</a>.
			</p>
		</div>
	</main>
</template>

<style lang="scss" scoped>
@import "@/styles/views/About.scss";
</style>