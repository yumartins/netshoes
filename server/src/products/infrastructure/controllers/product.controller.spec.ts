import type { GetProductsUseCase } from "@/products/application/use-cases/get-products.use-case";
import type { ProductsCollection } from "@/products/domain/entities/product.entity";
import { describe, expect, it } from "vitest";
import { ProductController } from "./product.controller";

const dummyCollection: ProductsCollection = {
	total: 1,
	pageSize: 10,
	totalPages: 1,
	products: [
		{
			code: "abc123",
			name: "Test Product",
			image: "http://example.com/image.jpg",
			rating: 4,
			visible: true,
			details: {
				name: "Detailed Name",
				description: "Detailed Description",
			},
			available: true,
			priceInCents: 1000,
			stockAvailable: true,
			salePriceInCents: 800,
		},
	],
};

const dummyGetProductsUseCase = {
	execute: async () => dummyCollection,
} as unknown as GetProductsUseCase;

describe("ProductController", () => {
	const controller = new ProductController(dummyGetProductsUseCase);

	it("should return products collection when getAllProducts is called", async () => {
		const result = await controller.getAllProducts();

		expect(result).toEqual(dummyCollection);
	});
});
