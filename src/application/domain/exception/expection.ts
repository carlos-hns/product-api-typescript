// Cria a classe generica que todas as exceções
// devem herdar.

export abstract class Exception extends Error {
  public description?: string;

  protected constructor(message: string, description?: string) {
    super(message);
    this.description = description;
  }
}