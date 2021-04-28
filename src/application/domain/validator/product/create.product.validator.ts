import { ValidationException } from "../../exception/validation.exception";
import { Product } from "../../model/product";
import { ProductParamsValidator } from "./product.params.validator";

export class CreateProductValidator {
  public static validate(item: Product): void | ValidationException {
    
    const fields : Array<string> = [];

    // Required fields
    if(!item.name) fields.push("name");
    else ProductParamsValidator.validateName(item.name);

    if(!item.purchase_date) fields.push("purchase_date");
    else ProductParamsValidator.validatePurchaseDate(item.purchase_date.toString());

    if(!item.purchase_place) fields.push("purchase_place");
    else ProductParamsValidator.validatePurchasePlace(item.purchase_place);

    if(!item.price) fields.push("price");
    else ProductParamsValidator.validatePrice(item.price);

    if(!item.invoice_image_url) fields.push("invoice_image_url");
    else ProductParamsValidator.validateInvoiceUrl(item.invoice_image_url);

    // Opcional fields
    if (item.comment) ProductParamsValidator.validateInvoiceUrl(item.comment);

    // Validate missing elements
    if(fields.length > 0) throw new ValidationException(
      "Required fields were not provided.",
      "Product validation: ".concat(fields.join(", ")).concat(" required!") 
    );

  }
}