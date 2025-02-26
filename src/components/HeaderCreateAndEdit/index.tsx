import { StatusBar } from "react-native";
import { BackArrow, BackButton, Header, TitleText } from "./styles";
import theme from "src/theme";

type Props = {
  title: string;
};

export function HeaderCreateAndEdit({ title }: Props) {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.GRAY_300}
        translucent
      />
      <Header>
        <BackButton>
          <BackArrow />
        </BackButton>
        <TitleText>{title}</TitleText>
      </Header>
    </>
  );
}
