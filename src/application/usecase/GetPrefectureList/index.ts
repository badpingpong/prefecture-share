import { Prefecture } from "@domain/models";
import { IPrefectureRepository } from "@domain/repository";
import { IGetPrefectureListUseCase } from "./type";

export class GetPrefectureListUseCase implements IGetPrefectureListUseCase {
  constructor(private readonly repository: IPrefectureRepository) {}
  handle(): Promise<Prefecture[]> {
    return this.repository.readAll();
  }
}
