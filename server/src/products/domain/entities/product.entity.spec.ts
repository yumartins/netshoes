import { describe, expect, it } from "vitest";
import { Product, ProductDetails } from "./product.entity";

describe("Product Entity", () => {
	it("should create a product instance using the static create method", () => {
		const plainProduct = {
			code: "x100",
			name: "Test Product",
			image: "http://example.com/product.jpg",
			rating: 5,
			visible: true,
			details: {
				name: "Test Detail",
				description: "Product Description",
			},
			available: true,
			priceInCents: "1500",
			stockAvailable: true,
			salePriceInCents: "1200",
		};

		const product = Product.create(plainProduct);

		expect(product).toBeInstanceOf(Product);
		expect(product.details).toBeInstanceOf(ProductDetails);
		expect(product.priceInCents).toBe(1500);
		expect(product.salePriceInCents).toBe(1200);
		expect(product.code).toBe("x100");
	});
});
