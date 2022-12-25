import { Prefecture, PrefectureListResponse } from "@domain/models";
import { PrefectureResponse } from "@domain/models/prefecture";

export interface IPrefectureRepository {
  readAll(): Promise<Prefecture[]>;
}

export interface IPrefectureTranslator {
  translatePrefectureList(res: PrefectureListResponse): Prefecture[];
  translatePrefecture(res: PrefectureResponse): Prefecture;
}
