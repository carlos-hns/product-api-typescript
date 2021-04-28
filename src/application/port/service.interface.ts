// Need be refactored after.

import { IQuery } from "./query.interface";

export interface IService<T> {
  add(item: T): Promise<T | undefined>
  getAll(query: IQuery): Promise<Array<T>>
  getById(id: string, query: IQuery): Promise<T | undefined>
  update(item: T): Promise<T | undefined>
  remove(id: string): Promise<boolean>
  count(query: IQuery): Promise<number>
}