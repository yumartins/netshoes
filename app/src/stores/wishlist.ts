import Cookies from "js-cookie";
import { defineStore } from "pinia";

const WISHLIST_COOKIE = "wishlist";

interface WishlistState {
	items: string[];
}

export const useWishlistStore = defineStore("wishlist", {
	state: (): WishlistState => ({
		items: [],
	}),

	getters: {
		count: (state) => state.items.length,

		isInWishlist: (state) => (id: string) => {
			return state.items.some((item) => item === id);
		},
	},

	actions: {
		initialize() {
			const savedWishlist = Cookies.get(WISHLIST_COOKIE);

			if (savedWishlist) {
				const data = JSON.parse(savedWishlist);

				this.items = data ?? [];
			}
		},

		addToWishlist(productId: string) {
			if (!this.isInWishlist(productId)) {
				this.items.push(productId);

				this.persistWishlist();
			}
		},

		removeFromWishlist(productId: string) {
			this.items = this.items.filter((item) => item !== productId);

			this.persistWishlist();
		},

		persistWishlist() {
			Cookies.set(WISHLIST_COOKIE, JSON.stringify(this.items), {
				expires: 7,
				sameSite: "Lax",
			});
		},
	},
});
