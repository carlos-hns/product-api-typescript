import { ApiException } from "./api.exception";
import { Exception } from "./exception";
import { InvalidParametherException } from "./InvalidParametherException";
import { ProductNotFoundException } from "./ProductNotFoundException";

export abstract class ApiExceptionManager {
  public static build(error: Exception): ApiException {
    if(error instanceof InvalidParametherException) {
      console.log("Cheguei aqui")
      return new ApiException(400, error.message, error.description);
    } else if (error instanceof ProductNotFoundException) {
      return new ApiException(404, error.message, error.description);
    }
  }
}