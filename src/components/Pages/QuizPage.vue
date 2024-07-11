<template>
	<div id="page">
		<h1>Quiz</h1>
	</div>
</template>

<script>
export default {
	name: "QuizPage",
	data() {
		return {
			correct: [],
			wrong: [],
		}
	},
	mounted() {
		//shuffle data
		this.ShuffleArray(originalData)
	},
	methods: {
		ShuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1))
				;[array[i], array[j]] = [array[j], array[i]]
			}
		},
	},
}
</script>
