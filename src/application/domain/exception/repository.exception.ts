import { Exception } from "./expection";

export class RepositoryException extends Exception {
  constructor(message: string, description?: string) {
      super(message, description)
  }
}