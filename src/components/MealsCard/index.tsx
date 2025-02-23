import { TouchableOpacityProps } from "react-native";
import { Container, Divider, Icon, TextHour, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  hour: string;
  type: string;
};

export function MealsCard({ title, type = "PRIMARY", hour, ...rest }: Props) {
  const MAX_LENGTH = 23;

  const truncatedTitle =
    title.trimEnd().length > MAX_LENGTH
      ? `${title.slice(0, title.lastIndexOf(" ", MAX_LENGTH))}...`
      : title;

  return (
    <>
      <Container {...rest}>
        <TextHour>{hour}</TextHour>
        <Divider />
        <Title numberOfLines={1} ellipsizeMode="tail">
          {truncatedTitle}
        </Title>
        <Icon type={type} />
      </Container>
    </>
  );
}
