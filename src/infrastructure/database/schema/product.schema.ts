import Mongoose from 'mongoose';

interface IProductModel extends Mongoose.Document {}

const schema: any = {
  name: String,
  purchase_date: Date,
  purchase_place: String,
  price: Number,
  invoice_image_url: String,
  comment: String,
}

const options: any = {
  timestamps: { createdAt: 'created_at', updateAt: 'updated_at' },
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
}

export const ProductModel = Mongoose.model<IProductModel>('Product', new Mongoose.Schema(schema, options));