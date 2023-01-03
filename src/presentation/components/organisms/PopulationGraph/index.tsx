import { PrefecturesContext } from "@presentation/contexts";
import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

import {
  usePopulationDataForGraph,
  usePrefecturePopulationList,
} from "@presentation/hooks";
import { useContext } from "react";
import * as S from "./styles";

// お試し
const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

export const PopulationGraph = () => {
  const { selectedPrefectures } = useContext(PrefecturesContext);
  const ids = selectedPrefectures.map((p) => p.id);
  const { data } = usePrefecturePopulationList(ids);
  usePopulationDataForGraph(selectedPrefectures, data);
  return (
    <S.Root>
      {" "}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </S.Root>
  );
};
