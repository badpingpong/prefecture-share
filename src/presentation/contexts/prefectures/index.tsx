import { Prefecture } from "@domain/models";
import React, { useCallback, useState } from "react";
import { PrefectureContextValue } from "./type";

const initialValue = {
  selectedPrefectures: [],
  togglePrefecture: (pref: Prefecture) => {},
};
export const PrefecturesContext =
  React.createContext<PrefectureContextValue>(initialValue);

type Props = {
  children: React.ReactElement;
};
export const PrefecturesProvider: React.FC<Props> = ({ children }) => {
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>(
    []
  );

  const selectPrefecture = useCallback(
    (pref: Prefecture) => {
      if (selectedPrefectures.every((p) => p.id !== pref.id))
        setSelectedPrefectures([...selectedPrefectures, pref]);
    },
    [selectedPrefectures]
  );

  const deselectPrefecture = useCallback(
    (prefId: number) => {
      const newSelectedPrefectures = selectedPrefectures.filter(
        (p) => p.id !== prefId
      );
      setSelectedPrefectures(newSelectedPrefectures);
    },
    [selectedPrefectures]
  );

  const togglePrefecture = useCallback(
    (pref: Prefecture) => {
      if (selectedPrefectures.some((p) => p.id === pref.id))
        deselectPrefecture(pref.id);
      else selectPrefecture(pref);
    },
    [selectedPrefectures, selectPrefecture, deselectPrefecture]
  );

  return (
    <PrefecturesContext.Provider
      value={{
        selectedPrefectures,
        togglePrefecture,
      }}
    >
      {children}
    </PrefecturesContext.Provider>
  );
};
