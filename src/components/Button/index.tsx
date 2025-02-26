import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  Title,
  ButtonTypeStyleProps,
  Icon,
  ViewIcon,
} from "./styles";

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ icon, title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon && (
        <ViewIcon>
          <Icon type={type} name={icon} />
        </ViewIcon>
      )}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
