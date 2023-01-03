import { Prefecture } from "@domain/models";
import { PrefectureCheckbox } from "@presentation/components/molecules";
import { PrefecturesContext } from "@presentation/contexts";
import { useContext } from "react";
import * as S from "./styles";

type Props = {
  prefectureList: Prefecture[];
};

export const PrefectureListSelect: React.FC<Props> = ({ prefectureList }) => {
  const { togglePrefecture } = useContext(PrefecturesContext);
  return (
    <S.Root>
      <S.Heading>都道府県</S.Heading>
      <S.PrefectureList>
        {prefectureList.map((p) => (
          <PrefectureCheckbox
            key={p.id}
            prefecture={p}
            onCheck={(e) => {
              togglePrefecture(p);
            }}
          />
        ))}
      </S.PrefectureList>
    </S.Root>
  );
};
