import { ValidationException } from "../../exception/validation.exception";
import { Product } from "../../model/product";
import { ProductParamsValidator } from "./product.params.validator";

export class UpdateProductValidator {
  public static validate(item: Product): void | ValidationException {
    if(item.name) ProductParamsValidator.validateName(item.name);
    if(item.purchase_date) ProductParamsValidator.validatePurchaseDate(item.purchase_date.toString());
    if(item.purchase_place) ProductParamsValidator.validatePurchasePlace(item.purchase_place);
    if(item.price) ProductParamsValidator.validatePrice(item.price);
    if(item.invoice_image_url) ProductParamsValidator.validateInvoiceUrl(item.invoice_image_url);
    if (item.comment) ProductParamsValidator.validateInvoiceUrl(item.comment);
  }
}