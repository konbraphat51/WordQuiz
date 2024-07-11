<template>
	<div id="page" ref="page">
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

		document.addEventListener("keydown", this.GetKey)
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
				document.removeEventListener("keydown", this.GetKey)

				this.$router.push("result")
			}
		},

		GetKey(e) {
			const key = e.code

			//f
			if (key === "KeyF" && !this.showingAnswer) {
				this.OnGood()
			}
			//j
			if (key === "KeyJ" && !this.showingAnswer) {
				this.OnBad()
			}
			//space
			if (key === "Space" && this.showingAnswer) {
				console.log("Space")
				this.GotoNextWord()
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

<style scoped>
#WordCurrent {
	font-size: 100px;
}

#Answer {
	font-size: 50px;
}

#Good {
	background-color: green;
	color: white;
	font-size: 50px;
	position: absolute;
	left: 0;
	width: 40%;
}

#Bad {
	background-color: red;
	color: white;
	font-size: 50px;
	position: absolute;
	right: 0;
	width: 40%;
}

#Next {
	background-color: blue;
	color: white;
	font-size: 50px;
	width: 100%;
}
</style>
