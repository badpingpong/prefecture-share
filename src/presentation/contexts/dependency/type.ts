import { composition } from "@presentation/CompositionRoot";

export type DependencyContextValue = {
  GetPrefectureList: typeof composition.GetPrefectureList;
};
