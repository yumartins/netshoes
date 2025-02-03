<template>
	<main>
		<Breadcrumb :items="[{ label: 'Home', to: '/' }, { label: 'Wishlist' }]" />

    <div v-if="!wishlist.items.length" class="text-center py-12">
			<p class="text-gray-600">Sua wishlist está vazia.</p>

			<RouterLink to="/" class="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded hover:bg-primary-600 transition-colors">
        Ver produtos
      </RouterLink>
		</div>

		<div v-else class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6 lg:grid-cols-4 xl:grid-cols-5">
			<ProductCard v-for="product in products" :key="product.code" :product="product" />
		</div>
	</main>
</template>

<script setup lang="ts">
import { ProductCard } from "@/components";
import { Breadcrumb } from "@/layouts";
import { useProductsStore, useWishlistStore } from "@/stores";
import { useHead } from "@unhead/vue";
import { computed, onMounted } from "vue";
import { RouterLink } from "vue-router";

useHead({
	title: "Wishlist",
	meta: [
		{
			name: "description",
			content: "Página de wishlist",
		},
	],
});

const wishlist = useWishlistStore();
const productsStore = useProductsStore();

const data = computed(() => wishlist.items);

const products = computed(() =>
	productsStore.data.filter((product) => data.value.includes(product.code)),
);

onMounted(() => {
	wishlist.initialize();
});
</script>
