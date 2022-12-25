// フロントで扱う都道府県データの型
export type Prefecture = {
  id: number;
  name: string;
};

// 都道府県一覧のレスポンスの型
export type PrefectureListResponse = {
  message: string | null;
  result: Array<PrefectureResponse>;
};

export type PrefectureResponse = {
  prefCode: number;
  prefName: string;
};
