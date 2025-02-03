import "./style.css";

import devalue from "@nuxt/devalue";
import { createPinia } from "pinia";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./router";
import { useProductsStore } from "./stores";

export const createApp = ViteSSG(
	App,
	{
		base: import.meta.env.BASE_URL,
		routes,
	},
	async ({ app, router, initialState }) => {
		const pinia = createPinia();
		app.use(pinia);

		if (import.meta.env.SSR) {
			initialState.pinia = pinia.state.value;
		}

		if (!import.meta.env.SSR) {
			pinia.state.value = initialState?.pinia || {};
		}

		router.beforeEach(async (_, __, next) => {
			const store = useProductsStore(pinia);

			if (!store.data.length) await store.initialize();

			next();
		});
	},
	{
		transformState(state) {
			return import.meta.env.SSR ? devalue(state) : state;
		},
	},
);
