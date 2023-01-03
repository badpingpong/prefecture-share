import { Prefecture } from "@domain/models";
import {
  PrefectureResponse,
  PrefectureListResponse,
} from "@domain/models/prefecture";
import { IPrefectureTranslator } from "./type";

export class PrefectureTranslator implements IPrefectureTranslator {
  translatePrefecture(res: PrefectureResponse): Prefecture {
    return { id: res.prefCode, name: res.prefName };
  }

  translatePrefectureList(res: PrefectureListResponse): Prefecture[] {
    return res.result.map((prefectureRes) =>
      this.translatePrefecture(prefectureRes)
    );
  }
}
