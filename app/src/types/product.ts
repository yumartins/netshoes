export interface Product {
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
	priceInCents: number;
	stockAvailable: boolean;
	salePriceInCents: number;
}

export interface ProductsCollection {
	total: number;
	pageSize: number;
	products: Product[];
	totalPages: number;
}
