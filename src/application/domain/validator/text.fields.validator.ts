import { ValidationException } from "../exception/validation.exception";

export class TextFieldsValidator {
  public static validateTextField(text: String, min: number, max: number, field: string): void | ValidationException {
    if(text.length < min || text.length > max) {
      throw new ValidationException(
        `${field} must contain a minumum of ${min} and maximum of ${max} characters.`
      );
    }
  }
}