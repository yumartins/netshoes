<template>
	<RouterLink
    to="#"
    class="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 relative group"
    :title="product.name"
  >
		<button
      @click="toggleWishlist"
      :class="cn(
        'absolute top-2 right-2 z-10 p-1 rounded-full',
        isInWishlist ? 'bg-red-500' : 'bg-gray-300',
      )"
    >
			<Heart :size="16" class="text-white" />
		</button>

		<img :src="product.image" :alt="product.name" class="w-full h-40 object-cover rounded-t-lg" />

		<div class="p-6">
			<h2 class="text-gray-800 font-medium mb-2 text-lg line-clamp-2">{{ product.name }}</h2>

      <div class="flex items-center gap-1">
        <span class="text-yellow-500" v-for="rating in getRatings" :key="rating">★</span>

        <span class="text-gray-600 font-medium">{{ product.rating.toFixed(1) }}</span>
      </div>

			<div class="flex flex-col mt-2">
        <p class="text-gray-400 line-through text-sm">{{ formattedPrice }}</p>
				<p class="text-primary-500 font-bold text-xl">{{ formattedSalePrice }}</p>
      </div>
		</div>
	</RouterLink>
</template>

<script setup lang="ts">
import { useWishlistStore } from "@/stores";
import type { Product } from "@/types";
import { cn } from "@/utils";
import { Heart } from "lucide-vue-next";
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{
	product: Product;
}>();

const wishlist = useWishlistStore();

const isInWishlist = computed(() => wishlist.isInWishlist(props.product.code));

const formattedSalePrice = computed(() => {
	return new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(props.product.salePriceInCents / 100);
});

const formattedPrice = computed(() => {
	return new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(props.product.priceInCents / 100);
});

function toggleWishlist() {
	if (isInWishlist.value) {
		wishlist.removeFromWishlist(props.product.code);

		return;
	}

	wishlist.addToWishlist(props.product.code);
}

const getRatings = Array.from(
	{ length: props.product.rating },
	(_, index) => index + 1,
);
</script>
