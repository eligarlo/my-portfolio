<template>
	<div>
		{{ staticText }}
		<span class="typed-text">{{ typeValue }}</span>
		<span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
	</div>
</template>

<script>
import { setTimeout } from "timers"
export default {
	props: {
		staticText: String,
		typeArray: { type: Array, required: true },
		typingSpeed: { type: Number, default: 100 },
		erasingSpeed: { type: Number, default: 50 },
		newTextDelay: { type: Number, default: 1500 },
	},
	data: () => {
		return {
			typeValue: "",
			typeStatus: false,
			typeArrayIndex: 0,
			charIndex: 0,
		}
	},
	methods: {
		typeText() {
			if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
				if (!this.typeStatus) this.typeStatus = true

				this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
					this.charIndex
				)
				this.charIndex += 1

				setTimeout(this.typeText, this.typingSpeed)
			} else {
				this.typeStatus = false
				setTimeout(this.eraseText, this.newTextDelay)
			}
		},
		eraseText() {
			if (this.charIndex > 0) {
				if (!this.typeStatus) this.typeStatus = true

				this.typeValue = this.typeArray[this.typeArrayIndex].substring(
					0,
					this.charIndex - 1
				)
				this.charIndex -= 1
				setTimeout(this.eraseText, this.erasingSpeed)
			} else {
				this.typeStatus = false
				this.typeArrayIndex += 1
				if (this.typeArrayIndex >= this.typeArray.length)
					this.typeArrayIndex = 0

				setTimeout(this.typeText, this.typingSpeed + 1000)
			}
		},
	},
	created() {
		setTimeout(this.typeText, this.newTextDelay + 200)
	},
}
</script>

<style lang="scss" scoped>
@import "@/styles/components/TypeAnimation.scss";
</style>