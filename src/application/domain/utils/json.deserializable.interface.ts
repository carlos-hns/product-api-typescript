export interface IJSONDeserializable<T> {
  fromJSON(json: any): T
}