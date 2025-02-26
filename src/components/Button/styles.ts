import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme, css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  width: 80%;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }: { theme: DefaultTheme; type: ButtonTypeStyleProps }) => type === "PRIMARY" ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme, type }: { theme: DefaultTheme; type: ButtonTypeStyleProps }) => type === "PRIMARY" ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_700};

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  color: ${({ theme, type }: { theme: DefaultTheme; type: Props['type'] }) => type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_400};
`;

export const ViewIcon = styled.View`
  margin-right: 8px;
`

export const Icon = styled(MaterialIcons).attrs(({ theme, type }: { theme: DefaultTheme, type: Props['type'] }) => ({
  size: 20,
  color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_400
}))``;