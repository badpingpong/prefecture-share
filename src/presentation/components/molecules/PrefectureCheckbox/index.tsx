import { Prefecture } from "@domain/models";
import { Checkbox, Label } from "@presentation/components/atoms";
import * as S from "./styles";
type Props = {
  prefecture: Prefecture;
};
export const PrefectureCheckbox: React.FC<Props> = ({ prefecture }) => {
  const { name } = prefecture;
  return (
    <S.Root>
      <Checkbox name={name} id={name} />
      <Label htmlFor={name}>{name}</Label>
    </S.Root>
  );
};
