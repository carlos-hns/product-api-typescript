import { Entity } from "../../application/domain/model/entity";

export class ProductEntity extends Entity {
  constructor() { super() };
  public name?: string;
  public purchase_date?: Date;
  public purchase_place?: string;
  public price?: number;
  public invoice_image_url?: string;
  public comment?: string;
}