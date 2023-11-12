import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screens/Restaurants";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {  useFonts as useOswaldFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import {  useFonts as userLatoFont, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {

  const [oswaldLoaded] = useOswaldFont({
    Oswald_400Regular,
  });
  const [latoLoaded] = userLatoFont({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null
  }
  return (
    <>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
        </ThemeProvider>
      </PaperProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
