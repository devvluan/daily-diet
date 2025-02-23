import { TouchableOpacityProps } from "react-native";

import {
  Container,
  PercentageText,
  DescriptionText,
  ButtonTypeStyleProps,
  StatsContainer,
  DiagonalArrowIcon,
} from "./styles";

type Props = TouchableOpacityProps & {
  percentage: string;
  subtitle: string;
  type?: ButtonTypeStyleProps;
};

export function DietProgressCard({
  percentage,
  subtitle,
  type,
  ...rest
}: Props) {
  return (
    <Container {...rest} type={type}>
      <DiagonalArrowIcon type={type} />
      <StatsContainer>
        <PercentageText>{percentage}%</PercentageText>
        <DescriptionText>{subtitle}</DescriptionText>
      </StatsContainer>
    </Container>
  );
}
