import { PrefecturesResponse } from "@domain/models";

export interface PrefectureDriver {
  /**
   * @return {PrefecturesResponse} - 都道府県一覧を含むレスポンス
   */
  fetchAll(): Promise<PrefecturesResponse>;
}
