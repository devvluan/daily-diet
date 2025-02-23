import styled, { DefaultTheme, css } from "styled-components/native";
import { Circle } from "phosphor-react-native";

import { TouchableOpacity } from "react-native";

import { ButtonTypeStyleProps } from "@components/DietProgressCard/styles";

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 100%;

  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200};

  flex-direction: row;
  align-items: center;

  padding: 15px;
  margin-bottom: 12px;

`;


export const TextHour = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: 20px;
  `}
`;

export const Divider = styled.View`
  width: 2px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100};
  height: 70%;
  position: absolute;
  left: 60px;
`;

export const Title = styled.Text`
${({ theme }: { theme: DefaultTheme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_700};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  flex-shrink: 1;
  margin-left: 20px;
`;

export const Icon = styled(Circle).attrs<Props>(({ theme, type }: { theme: DefaultTheme, type: Props['type'] }) => ({
  size: 20,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  weight: "fill"
}))`
  position: absolute;
  right: 20px;
  margin-right: 3px;
`;