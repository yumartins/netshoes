import type {
	Product,
	ProductsCollection,
} from "@/products/domain/entities/product.entity";
import type { ProductRepository } from "@/products/domain/ports/repositories/product.repository";
import { describe, expect, it } from "vitest";
import { GetProductsUseCase } from "./get-products.use-case";

const dummyRepository: ProductRepository = {
	findAll: async (): Promise<ProductsCollection> => {
		return {
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
				} as Product,
			],
		};
	},
};

describe("GetProductsUseCase", () => {
	it("should return a products collection", async () => {
		const useCase = new GetProductsUseCase(dummyRepository);
		const result = await useCase.execute();

		expect(result).toHaveProperty("total", 1);
		expect(result.products.length).toBe(1);
		expect(result.products[0].code).toBe("abc123");
	});
});
