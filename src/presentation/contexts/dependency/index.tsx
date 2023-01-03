import { composition } from "@presentation/CompositionRoot";
import { createContext, useMemo } from "react";
import { DependencyContextValue } from "./type";

const initialValue: DependencyContextValue = {
  GetPrefectureList: composition.GetPrefectureList,
};
export const DependencyContext = createContext(initialValue);

type Props = {
  children: React.ReactNode;
};

export const DependencyProvider: React.FC<Props> = ({ children }) => {
  const value: DependencyContextValue = useMemo(
    () => ({
      GetPrefectureList: composition.GetPrefectureList,
    }),
    []
  );

  return (
    <DependencyContext.Provider value={value}>
      {children}
    </DependencyContext.Provider>
  );
};
