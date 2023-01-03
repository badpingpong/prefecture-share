import { PrefecturesContext } from "@presentation/contexts";
import React, { useMemo } from "react";
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

  const { series, yMin, yMax } = usePopulationDataForGraph(
    selectedPrefectures,
    data
  );
  const options: HighchartsReact.Props = useMemo(
    () => ({
      title: { text: "都道府県ごとの人口推移" },
      series,
      xAxis: {
        title: { text: "年度" },
        tickInterval: 5,
      },
      yAxis: {
        title: { text: "人口数" },
        min: yMin,
        max: yMax,
      },
    }),
    [yMin, yMax, series]
  );

  return (
    <S.Root>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </S.Root>
  );
};
