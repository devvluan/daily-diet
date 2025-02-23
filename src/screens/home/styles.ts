import { SafeAreaView } from "react-native-safe-area-context";
import styled, { DefaultTheme, css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const ViewMeals = styled.View`
  margin-top: 24px;
  margin-bottom: 60px;
`;

export const TitleMeals = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 5px;
`;