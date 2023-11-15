import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screens/Restaurants";
import Maps from "./src/features/restaurants/screens/Maps";
import Settings from "./src/features/restaurants/screens/Settings";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as userLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
          activeTintColor:"tomato"
        }}
      >
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsScreen}
          options={{
            tabBarLabel: "Restaurant",
            tabBarIcon: ({ color }) => (
              <Ionicons name="restaurant-outline" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={Maps}
          options={{
            tabBarLabel: "Maps",
            tabBarIcon: ({ color }) => (
              <Feather name="map-pin" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <Feather name="settings" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const [oswaldLoaded] = useOswaldFont({
    Oswald_400Regular,
  });
  const [latoLoaded] = userLatoFont({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </ThemeProvider>
      </PaperProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
