<template>
	<div id="page">
		<h1>Quiz</h1>
		<div id="WordCurrent">
			{{ currentWord }}
		</div>

		<button id="Good" @click="OnGood" v-if="!showingAnswer">Good</button>
		<button id="Bad" @click="OnBad" v-if="!showingAnswer">Bad</button>

		<div id="Answer" v-if="showingAnswer">
			{{ answer }}
		</div>

		<button id="Next" @click="GotoNextWord" v-if="showingAnswer">Next</button>
	</div>
</template>

<script>
export default {
	name: "QuizPage",
	data() {
		return {
			quizQueue: [],
			index: 0,
			showingAnswer: false,
		}
	},
	mounted() {
		//shuffle data
		this.ShuffleArray(originalData)
		this.quizQueue = originalData

		correct = []
		wrong = []
	},
	methods: {
		ShuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1))
				;[array[i], array[j]] = [array[j], array[i]]
			}
		},

		OnGood() {
			correct.push(this.quizQueue[this.index])
			this.showingAnswer = true
		},

		OnBad() {
			wrong.push(this.quizQueue[this.index])
			this.showingAnswer = true
		},

		GotoNextWord() {
			this.index++
			this.showingAnswer = false

			if (this.index >= this.quizQueue.length) {
				this.$router.push("Result")
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
		answer() {
			if (this.index < this.quizQueue.length) {
				return this.quizQueue[this.index][1]
			} else {
				return "..."
			}
		},
	},
}
</script>
