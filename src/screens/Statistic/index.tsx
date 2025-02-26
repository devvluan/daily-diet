import { StatusBar, TouchableOpacityProps } from "react-native";
import {
  BackArrow,
  Container,
  DescriptionText,
  Header,
  TitleText,
  Title,
  StatsView,
  Meals,
  StatsMeals,
  BackButton,
} from "./styles";
import theme from "src/theme";

type Props = TouchableOpacityProps & {
  type: "PRIMARY" | "SECONDARY";
};

export function Statistic({ type }: Props) {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={
          type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
        }
      />
      <Header type={type}>
        <BackButton>
          <BackArrow type={type} />
        </BackButton>
        <TitleText>30,21%</TitleText>
        <DescriptionText>das refeições dentro da dieta</DescriptionText>
      </Header>
      <Title>Estatísticas gerais</Title>
      <StatsView>
        <TitleText>4</TitleText>
        <DescriptionText>
          melhor sequência de pratos dentro da dieta
        </DescriptionText>
      </StatsView>
      <StatsView>
        <TitleText>109</TitleText>
        <DescriptionText>refeições registradas</DescriptionText>
      </StatsView>
      <Meals>
        <StatsMeals type="PRIMARY">
          <TitleText>32</TitleText>
          <DescriptionText>refeições dentro da dieta</DescriptionText>
        </StatsMeals>
        <StatsMeals type="SECONDARY">
          <TitleText>77</TitleText>
          <DescriptionText>refeições fora da dieta</DescriptionText>
        </StatsMeals>
      </Meals>
    </Container>
  );
}
