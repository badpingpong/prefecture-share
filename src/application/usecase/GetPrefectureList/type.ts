import { Prefecture } from "@domain/models";

export interface IGetPrefectureListUseCase {
  handle(): Promise<Prefecture[]>;
}
