import { Schema, model, ObjectId } from 'mongoose';

const productSchema = new Schema({
  name: String,
  purchase_date: Date,
  purchase_place: String,
  price: Number,
  invoice_image_url: String,
  comment: String,
});

const ProductModel = model('Product', productSchema);
export { ProductModel };