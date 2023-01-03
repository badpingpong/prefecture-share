import { Prefecture } from "@domain/models";

export type PrefectureContextValue = {
  selectedPrefectures: Prefecture[];
  togglePrefecture: (pref: Prefecture) => void;
};
