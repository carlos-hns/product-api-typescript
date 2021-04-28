import { Strings } from "../../../utils/strings";
import { ValidationException } from "../exception/validation.exception";

export class PriceValidator {
  public static validate(price: number): void | ValidationException {
    
    // Isso parece sem uso, pensar melhor depois,
    // tendo em vista que o já é passado um número!
    const priceIsNotANumber = isNaN(price);
    if(priceIsNotANumber) throw new ValidationException(
      Strings.ERROR_MESSAGE.PRICE.format("{0}", price),
      Strings.ERROR_MESSAGE.PRICE_DESC,
    );

    if (price < 0) throw new ValidationException(
      Strings.ERROR_MESSAGE.PRICE_NOT_ALLOWED.format("{0}", price),
    );

  }
}