<template>
	<div id="page">
		<h1>Quiz</h1>
		<div id="WordCurrent">
			{{ currentWord }}
		</div>
	</div>
</template>

<script>
export default {
	name: "QuizPage",
	data() {
		return {
			quizQueue: [],
			correct: [],
			wrong: [],
			index: 0,
		}
	},
	mounted() {
		//shuffle data
		this.ShuffleArray(originalData)
		this.quizQueue = originalData
	},
	methods: {
		ShuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1))
				;[array[i], array[j]] = [array[j], array[i]]
			}
		},
	},
	computed: {
		currentWord() {
			if (this.index < this.quizQueue.length) {
				return this.quizQueue[this.index][0]
			} else {
				return "..."
			}
		},
	},
}
</script>
