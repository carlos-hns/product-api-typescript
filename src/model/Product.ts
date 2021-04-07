export class Product {
  constructor(
    public id: string,
    public name: string,
    public purchase_date: Date,
    public purchase_place: string,
    public price: number,
    public invoice_image_url: string,
    public comment: string,
  ) {}
}