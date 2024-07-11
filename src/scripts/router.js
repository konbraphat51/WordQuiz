const router = VueRouter.createRouter({
	mode: "hash",
	history: VueRouter.createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "ReceiveCSVPage",
			component: Vue.defineAsyncComponent(() =>
				loadModule("src/components/Pages/ReceiveCSVPage.vue", options),
			), //default page
		},
		{
			path: "/quiz",
			name: "QuizPage",
			component: Vue.defineAsyncComponent(() =>
				loadModule("src/components/Pages/QuizPage.vue", options),
			),
		},
	],
})
