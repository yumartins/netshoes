<template>
	<header class="bg-primary-500">
		<div class="container mx-auto px-4">
			<div class="flex items-center justify-between h-20">
				<RouterLink to="/" class="text-white">
					<img :src="Logo" class="h-6" />
        </RouterLink>

        <nav class="flex items-center gap-8">
					<RouterLink to="/wishlist" class="text-white text-sm flex items-center gap-2 group hover:text-white/80 transition-all duration-300 ease-in-out">
            <Heart :size="16" class="text-white group-hover:text-white/80 transition-all duration-300 ease-in-out" />

            Wishlist
          </RouterLink>

          <div class="relative group">
						<button class="text-primary-500 bg-white rounded-full p-1 transition-all duration-300 ease-in-out hover:scale-105">
							<UserRound :size="16" class="transition-all duration-300 ease-in-out" />
						</button>

						<div class="absolute z-50 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 pointer-events-none group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-300 ease-in-out">
							<RouterLink to="#" class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Entrar</RouterLink>
							<RouterLink to="#" class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Minha Conta</RouterLink>
							<RouterLink to="#" class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Endereços</RouterLink>
							<RouterLink to="#" class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Minha Netshoes</RouterLink>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { Logo } from "@/assets";
import { Heart, UserRound } from "lucide-vue-next";
import { RouterLink } from "vue-router";
</script>
