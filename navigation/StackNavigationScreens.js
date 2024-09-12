import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Movies from "../Screens/Components/Movies";
import Series from "../Screens/Components/Series";
import Songs from "../Screens/Components/Songs";
import MoviesDescription from "../Screens/Components/Descriptions/Movies";
import SongsDescription from "../Screens/Components/Descriptions/Songs";
import SeriesDescription from "../Screens/Components/Descriptions/Series";

export function MovieStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="MovieDescription" component={MoviesDescription} />
    </Stack.Navigator>
  );
}

export function SongsStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Songs" component={Songs} />
      <Stack.Screen name="SongsDescription" component={SongsDescription} />
    </Stack.Navigator>
  );
}

export function SeriesStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Series" component={Series} />
      <Stack.Screen name="SeriesDescription" component={SeriesDescription} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
