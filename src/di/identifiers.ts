// Essa classe é usada como identificação do Inversify nas
// classes que vão ser injetadas

export abstract class Identifier {
  public static readonly APP: any = Symbol.for("App");

  // Controllers
  public static readonly PRODUCT_CONTROLLER: any = Symbol.for("ProductController");

  //Services
  public static readonly PRODUCT_SERVICE: any = Symbol.for("ProductService");

  // Repositories
  public static readonly PRODUCT_REPOSITORY: any = Symbol.for("ProductRepository");

  // Models
  public static readonly PRODUCT_MODEL: any = Symbol.for("ProductModel");

  // Mappers
  public static readonly PRODUCT_ENTITY_MAPPER: any = Symbol.for("ProductEntityMapper");

}