<template>
	<div id="app">
		<button @click="Reset">reset</button>

		<LanguageSelection />

		<!-- view page shown here -->
		<router-view />
	</div>
</template>

<script>
export default Vue.defineComponent({
	name: "App",
	components: {
		LanguageSelection: Vue.defineAsyncComponent(() =>
			loadModule("src/components/LanguageSelection.vue", options),
		),
	},
	setup() {
		//set up i18n
		const {t} = VueI18n.useI18n()
		return {t}
	},
	methods: {
		Reset() {
			if (!window.confirm("Are you sure to reset?")) {
				return
			}

			this.$router.push("/")
		},
	},
})
</script>
