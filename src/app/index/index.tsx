import { ThemeProvider } from "styled-components";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import theme from "../../theme";

import { Loading } from "@components/Loading";
import { Creation } from "@screens/Creation";

export default function Index() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Creation /> : <Loading />}
    </ThemeProvider>
  );
}
