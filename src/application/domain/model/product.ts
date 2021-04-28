import { IJSONDeserializable } from "../utils/json.deserializable.interface";
import { IJSONSerializable } from "../utils/json.serializable.interface";
import { JsonUtils } from "../utils/json.utils";
import { Entity } from "./entity";

export class Product extends Entity implements IJSONSerializable, IJSONDeserializable<Product> {
  
  private _name?: string;
  private _purchase_date?: Date;
  private _purchase_place?: string;
  private _price?: number;
  private _invoice_image_url?: string;
  private _comment?: string;


  constructor() { super() }

  get name(): string | undefined {
    return this._name;
  }

  set name(value: string | undefined) {
    this._name = value;
  }

  get purchase_date(): Date | undefined {
    return this._purchase_date;
  }

  set purchase_date(value: Date | undefined) {
    this._purchase_date = value;
  }

  get purchase_place(): string | undefined {
    return this._purchase_place;
  }

  set purchase_place(value: string | undefined) {
    this._purchase_place = value;
  }

  get price(): number | undefined {
    return this._price;
  }

  set price(value: number | undefined) {
    this._price = value;
  }

  get invoice_image_url(): string | undefined {
    return this._invoice_image_url;
  }

  set invoice_image_url(value: string | undefined) {
    this._invoice_image_url = value;
  }

  get comment(): string | undefined {
    return this._comment;
  }

  set comment(value: string | undefined) {
    this._comment = value;
  }

  toJSON() {
    return {
      id: this.id ? this.id :undefined,
      name: this._name ? this.name : undefined,
      purchase_date: this._purchase_date ? this._purchase_date : undefined,
      purchase_place: this.purchase_place ? this.purchase_place : undefined,
      price: this.price ? this.price : undefined,
      invoice_image_url: this.invoice_image_url ? this.invoice_image_url : undefined,
      comment: this.comment ? this.comment : undefined 
    };
  }

  fromJSON(json: any): Product {
    if(!json) return this;

    if(typeof json == "string" && JsonUtils.isJsonString(json)) {
      json = JSON.parse(json);
    }

    if(json.id !== undefined) this.id = json.id;
    if(json.name !== undefined) this.name = json.name;
    if(json.purchase_date !== undefined) this.purchase_date = json.purchase_date;
    if(json.purchase_place !== undefined) this.purchase_place = json.purchase_place;
    if(json.price !== undefined) this.price = json.price;
    if(json.invoice_image_url !== undefined) this.invoice_image_url = json.invoice_image_url;
    if(json.name !== undefined) this.name = json.name;
    if(json.comment !== undefined) this.comment = json.comment;
    return this;
  }

}