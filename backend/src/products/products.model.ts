import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true },
);

export interface Product extends mongoose.Document {
  id: Number;
  productId: String;
  productName: String;
  country: String;
}
