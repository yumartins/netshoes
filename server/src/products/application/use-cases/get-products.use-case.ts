import type { ProductsCollection } from '@/products/domain/entities/product.entity';
import {
	PRODUCT_REPOSITORY,
	type ProductRepository,
} from '@/products/domain/ports/repositories/product.repository';
import { Inject, Injectable } from '@nestjs/common';

export const GET_PRODUCTS_USE_CASE = Symbol('GetProductsUseCase');

@Injectable()
export class GetProductsUseCase {
	constructor(
		@Inject(PRODUCT_REPOSITORY)
		private readonly productRepository: ProductRepository,
	) {}

	async execute(): Promise<ProductsCollection> {
		return this.productRepository.findAll();
	}
}
