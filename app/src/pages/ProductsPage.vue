<template>
	<main>
		<Breadcrumb :items="[{ label: 'Home' }]" />

		<div v-if="products.length > 0" class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6 lg:grid-cols-4 xl:grid-cols-5">
			<ProductCard v-for="product in products" :key="product.code" :product="product" />
		</div>

    <div v-else class="text-center py-12">
			<p class="text-gray-500">Não foi possível carregar os produtos</p>
		</div>
	</main>
</template>

<script setup lang="ts">
import { ProductCard } from "@/components";
import { Breadcrumb } from "@/layouts";
import { useProductsStore, useWishlistStore } from "@/stores";
import { useHead } from "@unhead/vue";
import { onMounted } from "vue";

useHead({
	meta: [
		{
			name: "description",
			content: "Página de produtos",
		},
	],
});

const wishlist = useWishlistStore();
const productsStore = useProductsStore();

const products = productsStore.data;

onMounted(() => {
	wishlist.initialize();
});
</script>
