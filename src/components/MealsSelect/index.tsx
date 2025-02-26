import { TouchableOpacityProps } from "react-native";
import { Container, Icon, MealsSelectProps, Title } from "./styles";

type Props = TouchableOpacityProps &
  MealsSelectProps & {
    title: string;
  };
export function MealsSelect({ title, type, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Icon type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
