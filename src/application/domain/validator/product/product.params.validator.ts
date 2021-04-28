import { ValidationException } from "../../exception/validation.exception";
import { DateValidator } from "../date.validator";
import { PriceValidator } from "../price.validator";
import { TextFieldsValidator } from "../text.fields.validator";

export class ProductParamsValidator {
  public static validateName(name: string): void | ValidationException {
    TextFieldsValidator.validateTextField(name, 0, 80, "Name");
  }

  public static validatePurchaseDate(date: string): void | ValidationException {
    DateValidator.validate(date);
  }

  public static validatePurchasePlace(place: string): void | ValidationException {
    TextFieldsValidator.validateTextField(place, 0, 80, "Purchase place");
  }

  public static validatePrice(price: number): void | ValidationException {
    PriceValidator.validate(price);
  }

  // Need be refactored after.
  public static validateInvoiceUrl(place: string): void | ValidationException {
    TextFieldsValidator.validateTextField(place, 0, 200, "Invoice Url");
  }

  public static validateComment(place: string): void | ValidationException {
    TextFieldsValidator.validateTextField(place, 0, 240, "Comment");
  }
}