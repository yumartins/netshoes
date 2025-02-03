import {
	GET_PRODUCTS_USE_CASE,
	GetProductsUseCase,
} from '@/products/application/use-cases/get-products.use-case';
import { PRODUCT_REPOSITORY } from '@/products/domain/ports/repositories/product.repository';
import { InMemoryProductRepository } from '@/products/infrastructure/adapters/repositories/in-memory-product.repository';
import { ProductController } from '@/products/infrastructure/controllers/product.controller';
import { Module } from '@nestjs/common';

@Module({
	controllers: [ProductController],
	providers: [
		{
			provide: GET_PRODUCTS_USE_CASE,
			useClass: GetProductsUseCase,
		},
		{
			provide: PRODUCT_REPOSITORY,
			useClass: InMemoryProductRepository,
		},
	],
})
export class ProductsModule {}
