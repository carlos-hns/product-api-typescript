import { Exception } from './exception';

export class InvalidParametherException extends Exception {
  constructor(message: string, description?: string) {
    super(message, description);
  }
}