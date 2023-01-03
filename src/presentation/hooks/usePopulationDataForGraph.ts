import { Prefecture } from "@domain/models";
import { PrefecturePopulation } from "@domain/models/prefecture";
import { useMemo } from "react";

type PopulationGraphData = {
  year: number;
} & {
  [key in string]: number;
};
export const usePopulationDataForGraph = (
  prefectures: Prefecture[],
  populations: Omit<PrefecturePopulation, "prefName">[]
) => {
  // const data:PopulationGraphData = useMemo(
  //   () =>
  //     populations.map((population) => {
  //       const pref = prefectures.find((p) => p.id === population.id);
  //       const prefName = pref?.name ?? `不明な都道府県(ID:${population.id})`;
  //       const dataPerPref = population.data.map((item) => ({
  //         name: prefName,
  //         year: item.year,
  //         population: item.value,
  //       }));
  //       return dataPerPref;
  //     }),
  //   [prefectures, populations]
  // );

  return {};
};
