import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme, css } from 'styled-components/native';

export const Header = styled.View`
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_300};
    padding: 20px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    width: 120%;
    height: 12%;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 60px;
  justify-content: left;
`;
export const BackArrow = styled(ArrowLeft).attrs(({ theme }: { theme: DefaultTheme }) => ({
  size: 27,
  color: theme.COLORS.GRAY_700
}))`
`;

export const TitleText = styled.Text`
  ${({theme}: {theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;