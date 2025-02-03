import {
	Product,
	type ProductsCollection,
} from '@/products/domain/entities/product.entity';
import type { ProductRepository } from '@/products/domain/ports/repositories/product.repository';
import { productsData } from '@/products/infrastructure/repositories/data/products.data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryProductRepository implements ProductRepository {
	async findAll(): Promise<ProductsCollection> {
		return {
			...productsData,
			products: productsData.products.map(Product.create),
		};
	}

	async findAvailable(): Promise<Product[]> {
		return productsData.products
			.filter(({ available }) => available)
			.map(Product.create);
	}

	async findVisible(): Promise<Product[]> {
		return productsData.products
			.filter(({ visible }) => visible)
			.map(Product.create);
	}
}
