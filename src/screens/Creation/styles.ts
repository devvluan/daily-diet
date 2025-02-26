import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme, css } from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
  flex: 1;
  align-items: center;
`;