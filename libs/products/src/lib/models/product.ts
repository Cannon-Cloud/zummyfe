import { Category } from '@zummy/products';

export class Product {
  id?: string;
  name: any;
  description?: string;
  richDescription?: string;
  image?: string | null;
  images?: string[];
  brand?: string;
  price!: number;
  category!: Category;
  countInStock?: number;
  rating?: number;
  numReviews?: number;
  isFeatured?: boolean;
  dateCreated?: string;
}
