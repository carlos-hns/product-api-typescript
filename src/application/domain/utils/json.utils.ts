export class JsonUtils {
  public static isJsonString(str): boolean {
    try {
      return typeof JSON.parse(str) === "object";
    } catch (e) {
      return false;
    }
  }
}