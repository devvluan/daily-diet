import styled, { DefaultTheme, css } from "styled-components/native";
import { ForkKnife } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const ImageProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_700};
  border-width: 1px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;

  flex-direction: row;
  align-items: center;
`;

export const LogoIcon = styled(ForkKnife).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: 40,
    weight: "bold",
    color: theme.COLORS.GRAY_700,
  })
)``;

export const DailyContainer = styled.View`
  flex-direction: column;
  margin: 0px 4px;
`;

export const DailyText = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    font-weight: 700;
  `}
`;

export const DietText = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  line-height: 18px;
  font-weight: 700;
`;
