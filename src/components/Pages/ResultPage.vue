<template>
	<div id="page">
		<h1>Result</h1>

		<div id="Accuracy">Accuracy: {{ accuracy }}</div>

		<div id="Downloads">
			<button @click="DownLoadCsv(correct, 'correct.csv')">
				Download correct
			</button>
			<button @click="DownLoadCsv(wrong, 'wrong.csv')">Download wrong</button>
		</div>

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
			correct: [],
			wrong: [],
		}
	},
	mounted() {
		this.accuracy = correct.length / (correct.length + wrong.length)
		this.correct = correct
		this.wrong = wrong
	},
	methods: {
		DownLoadCsv(arrayData, filename) {
			const array = arrayData
			const csv = array.map((row) => row.join(",")).join("\n")
			const blob = new Blob([csv], {type: "text/csv"})
			const url = window.URL.createObjectURL(blob)
			const a = document.createElement("a")
			a.download = filename
			a.href = url
			a.click()
			window.URL.revokeObjectURL(url)
		},
	},
}
</script>
