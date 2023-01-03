import { Prefecture } from "@domain/models";
import { Checkbox, Label } from "@presentation/components/atoms";
import { MouseEventHandler } from "react";
import * as S from "./styles";

type Props = {
  prefecture: Prefecture;
  onCheck: MouseEventHandler<HTMLInputElement>;
};

export const PrefectureCheckbox: React.FC<Props> = ({
  prefecture,
  onCheck,
}) => {
  const { name } = prefecture;
  return (
    <S.Root>
      <Checkbox name={name} id={name} onClick={onCheck} />
      <Label htmlFor={name}>{name}</Label>
    </S.Root>
  );
};
