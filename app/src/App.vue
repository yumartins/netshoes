<template>
	<div class="min-h-screen flex flex-col font-sans">
		<Header />

		<div class="container mx-auto px-6 py-10">
			<router-view />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Header } from "@/layouts";
</script>
