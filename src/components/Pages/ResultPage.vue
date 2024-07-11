<template>
	<div id="page">
		<h1>Result</h1>

		<div id="Accuracy">Accuracy: {{ accuracy }}</div>

		<div id="MissTable">
			<h2>Mistook words</h2>
			<table>
				<tr>
					<th>Original</th>
					<th>Answer</th>
				</tr>
				<tr v-for="word in wrong">
					<td>{{ word[0] }}</td>
					<td>{{ word[1] }}</td>
				</tr>
			</table>
		</div>
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
			wrong: [],
		}
	},
	mounted() {
		this.accuracy = correct.length / (correct.length + wrong.length)
		this.wrong = wrong
	},
}
</script>
