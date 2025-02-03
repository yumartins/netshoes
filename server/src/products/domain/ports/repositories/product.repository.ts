import type { ProductsCollection } from '@/products/domain/entities/product.entity';

export const PRODUCT_REPOSITORY = Symbol('ProductRepository');

export interface ProductRepository {
	findAll(): Promise<ProductsCollection>;
}
