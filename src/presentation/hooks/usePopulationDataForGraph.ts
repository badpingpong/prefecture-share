import { Prefecture } from "@domain/models";
import { PrefecturePopulation } from "@domain/models/prefecture";
import { useMemo } from "react";

export const usePopulationDataForGraph = (
  prefectures: Prefecture[],
  populations: Omit<PrefecturePopulation, "prefName">[]
) => {
  const series = useMemo(
    () =>
      prefectures.map((pref) => {
        const population = populations.find((p) => p.id === pref.id);
        return {
          type: "line",
          name: pref.name,
          data: population?.data?.map((item) => [item.year, item.value]) ?? [],
        };
      }),
    [prefectures, populations]
  );

  const values = populations
    .map((p) => p.data.map((item) => item.value))
    .flat();
  const yMax = Math.max(...values);
  const yMin = Math.min(...values);

  return {
    series,
    yMax,
    yMin,
  };
};
