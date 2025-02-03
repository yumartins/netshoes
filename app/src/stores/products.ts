import type { ProductsCollection } from "@/types";
import { defineStore } from "pinia";

interface ProductsState extends ProductsCollection {}

export const useProductsStore = defineStore("products", {
	state: (): ProductsState => ({
		total: 0,
		pageSize: 0,
		products: [],
		totalPages: 0,
	}),
	getters: {
		data(state) {
			return state.products;
		},
	},
	actions: {
		async initialize() {
			const response = await fetch("http://localhost:3333/products");

			if (!response.ok) {
				throw new Error("Failed to fetch products");
			}

			const data = await response.json();

			this.total = data.total;
			this.pageSize = data.pageSize;
			this.products = data.products;
			this.totalPages = data.totalPages;
		},
	},
});
