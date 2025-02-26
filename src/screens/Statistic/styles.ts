import styled, { css, DefaultTheme } from "styled-components/native"

import { TouchableOpacity } from "react-native";
import { ArrowLeft } from 'phosphor-react-native';
import { ButtonTypeStyleProps } from "@components/Button/styles";

type Props = {
  type?: ButtonTypeStyleProps;
}

export const Container = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  background-color: ${({ theme, type }: { theme: DefaultTheme, type: ButtonTypeStyleProps }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 120%;
  height: 20%;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 60px;
  top: 20px;
`;
export const BackArrow = styled(ArrowLeft).attrs<Props>(({ theme, type }: { theme: DefaultTheme, type: ButtonTypeStyleProps }) => ({
  size: 27,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
`;

export const TitleText = styled.Text`
  ${({theme}: {theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.XXL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
export const DescriptionText = styled.Text`
  ${({theme}: {theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
    text-align: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const StatsView = styled.View`
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100};
    padding: 20px;
    border-radius: 8px;
    align-items: center;
    width: 90%;
    margin-top: 14px;
`;

export const Meals = styled.View`
  flex-direction: row;
  margin-top: 13px;
  gap: 15px
`;

export const StatsMeals = styled.View`
background-color: ${({ theme, type }: { theme: DefaultTheme; type: ButtonTypeStyleProps }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 43%;
`;