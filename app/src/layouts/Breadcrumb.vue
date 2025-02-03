<template>
	<nav class="flex items-center gap-2 text-primary-500 pb-6 mb-6 border-b border-solid border-b-gray-200">
		<template v-for="(item, index) in items" :key="item.label">
			<template v-if="index > 0">
				<span>/</span>
			</template>

			<router-link v-if="item.to" :to="item.to" class="hover:text-primary-600">
				{{ item.label }}
			</router-link>
			<span v-else class="font-semibold">{{ item.label }}</span>
		</template>
	</nav>
</template>

<script setup lang="ts">
defineProps<{
	items: Array<{
		to?: string;
		label: string;
	}>;
}>();
</script>
