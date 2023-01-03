import { PrefecturesContext } from "@presentation/contexts";
import {
  usePopulationDataForGraph,
  usePrefecturePopulationList,
} from "@presentation/hooks";
import { useContext } from "react";
import * as S from "./styles";

export const PopulationGraph = () => {
  const { selectedPrefectures } = useContext(PrefecturesContext);
  const ids = selectedPrefectures.map((p) => p.id);
  const { data } = usePrefecturePopulationList(ids);
  usePopulationDataForGraph(selectedPrefectures, data);
  return <S.Root>population graph</S.Root>;
};
