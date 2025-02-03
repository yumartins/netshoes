import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "products",
		component: () => import("@/pages/ProductsPage.vue"),
	},
	{
		path: "/wishlist",
		name: "wishlist",
		component: () => import("@/pages/WishlistPage.vue"),
	},
];
