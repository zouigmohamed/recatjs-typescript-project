import { ProductNameTypes } from "../types";

export interface FurnitureProduct {
  id?: string;
  title: string;
  category: string;
  price: string;
  colors: string[];
  sizes: string[];
  imageUrl: string;
  description: string;
}

export interface IFormInput {
  id: string;
  name: ProductNameTypes;
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  image: string;
}
