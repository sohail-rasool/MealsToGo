import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screens/Restaurants";
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}

