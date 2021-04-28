import { Exception } from './expection';

export class ProductNotFoundException extends Exception {
  constructor(message: string, description?: string) {
    super(message, description);
  }
}