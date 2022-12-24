import { Prefecture, PrefecturesResponse } from "@domain/models";
import { PrefectureResponse } from "@domain/models/prefecture";

export interface IPrefectureRepository {
  readAll(): Promise<Prefecture[]>;
}

export interface IPrefectureTranslator {
  translatePrefectures(res: PrefecturesResponse): Prefecture[];
  translatePrefecture(res: PrefectureResponse): Prefecture;
}
