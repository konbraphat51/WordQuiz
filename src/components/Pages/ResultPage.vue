<template>
	<div id="page">
		<h1>Result</h1>

		<div id="Accuracy">Accuracy: {{ accuracy }}</div>
	</div>
</template>

<script>
export default {
	name: "ResultPage",
	setup() {
		//set up i18n
		const {t} = VueI18n.useI18n()
		return {t}
	},
	data() {
		return {
			accuracy: 0,
		}
	},
	mounted() {
		this.accuracy = correct.length / (correct.length + wrong.length)
	},
}
</script>
