import { Exception } from "./expection";

export class ValidationException extends Exception {
  constructor(message: string, description?: string) {
    super(message, description);
  }
}