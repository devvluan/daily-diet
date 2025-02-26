import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme, css } from 'styled-components/native'

export type MealsSelectProps = {
  isActive?: boolean;
  type?: string
}

export const Container = styled(TouchableOpacity)<MealsSelectProps>`
  ${({ theme, isActive, type }: {theme: DefaultTheme, isActive: MealsSelectProps['isActive'], type: MealsSelectProps['type']}) => isActive && css`
    border: 1px solid ${isActive ? type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK : theme.COLORS.GRAY_200};
    `}

    border-radius: 4px;
    margin-right: 12px;
    margin-top: 20px;
    
    height: 50px;
    width: 150px;

    background-color: ${({ theme, isActive, type }: { theme: DefaultTheme, isActive: MealsSelectProps['isActive'], type: MealsSelectProps['type'] }) => isActive ? type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
  ${({theme}: {theme: DefaultTheme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Icon = styled(Circle).attrs<MealsSelectProps>(({ theme, type }: { theme: DefaultTheme, type: MealsSelectProps['type'] }) => ({
  size: 12,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  weight: "fill"
}))`
  position: absolute;
  left: 43px;
`;