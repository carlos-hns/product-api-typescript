export abstract class Strings {
  public static readonly ERROR_MESSAGE: any = {

    REQUEST_BODY_INVALID: 'Unable to process request body!',
    REQUEST_BODY_INVALID_DESC: 'Please verify that the JSON provided in the request body has a valid format and try again.',

    PRICE_NOT_ALLOWED: "Price {0}, not allowed, must be more or equals to 0.",
    PRICE: "Price {0}, is not a number.",
    PRICE_DESC: "Price must be in the format number ou number.number. Exameple: 10 ou 10.0",

    VALIDATE: {
      REQUIRED_FIELDS: 'Required fields were not provided...',
      REQUIRED_FIELDS_DESC: '{0} are required!',
      UUID_NOT_VALID_FORMAT: 'Some ID provided does not have a valid format!',
      UUID_NOT_VALID_FORMAT_DESC: 'A 24-byte hex ID similar to this: 507f191e810c19729de860ea is expected.',
      INVALID_FIELDS: 'One or more request fields are invalid...',
      INTEGER_GREATER_ZERO: '{0} must be an integer greater than zero.',
      NUMBER_GREATER_ZERO: '{0} must be a number greater than zero.',
      INVALID_DATA_TYPES_DESC: 'The data_types array must contain at least one element.',
      IMAGE_FORMAT_DESC: 'The image format must be jpg, jpeg or png.',
      IMAGE_SIZE_TOO_LARGE: 'The image size must be equal to or less than 500kb.'
    },

    DATE: {
      YEAR_NOT_ALLOWED: "Date {0} has year not allowed. The year must be greater than 1678 and less than 2261.",
      INVALID_DATE_FORMAT: "Date {0}, is not in valid ISO 8601 format.",
      INVALID_DATE_FORMAT_DESC: "Date must be in the format: yyyy-MM-dd.",
      INVALID_DATETIME_FORMAT: "Datetime: ${0}, is not in valid ISO 8601 format.",
      INVALID_DATETIME_FORMAT_DESC: "Datetime must be in the format: yyyy-MM-ddTHH:mm:ssZ"
    }
  }
}