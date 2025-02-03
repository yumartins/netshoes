export class ProductDetails {
	constructor(
		public readonly name: string,
		public readonly description: string
	) {}
}

export class Product {
	constructor(
		public readonly code: string,
		public readonly name: string,
		public readonly image: string,
		public readonly rating: number,
		public readonly visible: boolean,
		public readonly details: ProductDetails,
		public readonly available: boolean,
		public readonly priceInCents: number,
		public readonly stockAvailable: boolean,
		public readonly salePriceInCents: number
	) {}

	static create(props: {
		code: string;
		name: string;
		image: string;
		rating: number;
		visible: boolean;
		details: {
			name: string;
			description: string;
		};
		available: boolean;
		priceInCents: string;
		stockAvailable: boolean;
		salePriceInCents: string;
	}): Product {
		return new Product(
			props.code,
			props.name,
			props.image,
			props.rating,
			props.visible,
			new ProductDetails(props.details.name, props.details.description),
			props.available,
			Number(props.priceInCents),
			props.stockAvailable,
			Number(props.salePriceInCents)
		);
	}
}

export interface ProductsCollection {
	total: number;
	pageSize: number;
	products: Product[];
	totalPages: number;
}
