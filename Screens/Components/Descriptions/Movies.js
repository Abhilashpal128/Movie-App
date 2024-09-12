import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";

export default function MoviesDescription({ navigation, route }) {
  const ImageUri = "https://image.tmdb.org/t/p/w500";
  const Movie = route?.params?.item;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
            }}
          >
            {Movie?.title}
          </Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: "#f4511e", // Customize header background color
      },
      headerTintColor: "#fff", // Customize header text color
    });
  }, [navigation, Movie]);

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#FFFFFF" }}>
      <View style={{ height: "30%" }}>
        <ImageBackground
          source={{ uri: `${ImageUri}${Movie?.backdrop_path}` }}
          //   resizeMode="contain"
        >
          <View
            style={{
              height: "100%",
              justifyContent: "space-between",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginVertical: 10,
                  color: "#FFFFFF",
                  margin: 10,
                  //   backgroundColor:''
                }}
              >
                {Movie?.original_title}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "blue",
                width: "30%",
                height: 35,
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>Watch Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Overview: </Text>
        <Text>{Movie?.overview}</Text>
      </View>
      <View style={{ margin: 20, gap: 10 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Released On:{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>{Movie?.release_date}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Downloads: </Text>
          <Text style={{ fontSize: 16 }}>{Movie?.vote_count}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Ratings: </Text>
          <Text style={{ fontSize: 16 }}>{Movie?.vote_average}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
