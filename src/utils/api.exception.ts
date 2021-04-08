import { Exception } from "./exception";

export class ApiException extends Exception {
  public code: number;
  public description?: string;
  
  constructor(code: number, message: string, description?: string) {
    super(message);
    this.code = code;
    this.description = description;
  }

  public toJSON(): object {
    return {
      code: this.code,
      message: this.message,
      description: this.description
    }
  }

}