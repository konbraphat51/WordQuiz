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
			path: "/second",
			name: "SecondPage",
			component: Vue.defineAsyncComponent(() =>
				loadModule("src/components/Pages/SecondPage.vue", options),
			),
		},
	],
})
