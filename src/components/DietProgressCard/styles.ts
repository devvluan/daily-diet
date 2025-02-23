import { ArrowUpRight } from 'phosphor-react-native';
import styled, { DefaultTheme, css } from "styled-components/native";

import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type }: { theme: DefaultTheme; type: ButtonTypeStyleProps }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 20px;
  border-radius: 8px;
  align-items: center;
  width: 100%;
`;

export const DiagonalArrowIcon = styled(ArrowUpRight).attrs<Props>(({ theme, type }: { theme: DefaultTheme, type: ButtonTypeStyleProps }) => ({
  size: 32,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_DARK
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const StatsContainer = styled.View`
  align-items: center;
`;

export const PercentageText = styled.Text`
  ${({theme}: {theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.XXL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const DescriptionText = styled.Text`
${({theme}: {theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-top: 2px;
`;
