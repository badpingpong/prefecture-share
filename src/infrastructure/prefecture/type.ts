import { PrefectureListResponse } from "@domain/models";

export interface IPrefectureDriver {
  /**
   * @return {PrefectureListResponse} - 都道府県一覧を含むレスポンス
   */
  fetchAll(): Promise<PrefectureListResponse>;
}
