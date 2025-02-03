import { Product } from "@/products/domain/entities/product.entity";
import { describe, expect, it } from "vitest";
import { InMemoryProductRepository } from "./in-memory-product.repository";

describe("InMemoryProductRepository", () => {
	const repository = new InMemoryProductRepository();

	it("should return all products as instances of Product", async () => {
		const collection = await repository.findAll();

		expect(collection).toHaveProperty("total");
		expect(Array.isArray(collection.products)).toBe(true);

		for (const product of collection.products) {
			expect(product).toBeInstanceOf(Product);
		}
	});
});
