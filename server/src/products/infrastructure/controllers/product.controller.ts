import { GET_PRODUCTS_USE_CASE } from '@/products/application/use-cases/get-products.use-case';
import type { GetProductsUseCase } from '@/products/application/use-cases/get-products.use-case';
import type { ProductsCollection } from '@/products/domain/entities/product.entity';
import { Controller, Get, Inject } from '@nestjs/common';

@Controller('products')
export class ProductController {
	constructor(
		@Inject(GET_PRODUCTS_USE_CASE)
		private readonly getProductsUseCase: GetProductsUseCase,
	) {}

	@Get()
	async getAllProducts(): Promise<ProductsCollection> {
		return this.getProductsUseCase.execute();
	}
}
