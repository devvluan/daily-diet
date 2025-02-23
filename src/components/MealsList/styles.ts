import styled, { DefaultTheme, css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const Title = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;