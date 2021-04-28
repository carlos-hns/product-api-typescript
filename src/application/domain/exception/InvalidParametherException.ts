import { Exception } from "./expection";

export class InvalidParametherException extends Exception {
  constructor(message: string, description?: string) {
    super(message, description);
  }
}