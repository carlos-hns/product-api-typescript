import { Exception } from "../../application/domain/exception/expection";
import { InvalidParametherException } from "../../application/domain/exception/InvalidParametherException";
import { ProductNotFoundException } from "../../application/domain/exception/ProductNotFoundException";
import { RepositoryException } from "../../application/domain/exception/repository.exception";
import { ValidationException } from "../../application/domain/exception/validation.exception";
import { ApiException } from "./api.exception";

const BAD_REQUEST = 400;
const NOT_FOUND = 404;

export abstract class ApiExceptionManager {
  public static build(error: Exception): ApiException {
    if(error instanceof InvalidParametherException) {
      return new ApiException(BAD_REQUEST, error.message, error.description);
    } else if (error instanceof ProductNotFoundException) {
      return new ApiException(NOT_FOUND, error.message, error.description);
    } else if (error instanceof ValidationException) {
      return new ApiException(BAD_REQUEST, error.message, error.description);
    } else if (error instanceof RepositoryException) {
      return new ApiException(NOT_FOUND, error.message, error.description);
    }
  }
}