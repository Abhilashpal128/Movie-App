import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import your screens
import Movies from "../Screens/Components/Movies";
import Songs from "../Screens/Components/Songs";
import Series from "../Screens/Components/Series";
import { MovieStack, SeriesStack, SongsStack } from "./StackNavigationScreens";
import Icon from "react-native-vector-icons/MaterialIcons";

// Create Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Movies"
          component={MovieStack}
          options={{
            headerShown: false,
            tabBarLabel: "MoviesTab",
            tabBarIcon: ({ color, size }) => (
              <Icon name="movie" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Songs"
          component={SeriesStack}
          options={{
            headerShown: false,
            tabBarLabel: "SeriesTab",
            tabBarIcon: ({ color, size }) => (
              <Icon name="tv" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Series"
          component={SongsStack}
          options={{
            headerShown: false,
            tabBarLabel: "SongsTab",
            tabBarIcon: ({ color, size }) => (
              <Icon name="music-note" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
