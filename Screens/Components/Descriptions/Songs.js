import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Entypo } from "react-native-vector-icons";

export default function SongsDescription({ navigation, route }) {
  const Songs = route?.params?.item;

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
            {Songs?.name}
          </Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: "#f4511e", // Customize header background color
      },
      headerTintColor: "#fff", // Customize header text color
    });
  }, [navigation, Songs]);

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#FFFFFF" }}>
      <View style={{ height: "30%" }}>
        <ImageBackground source={{ uri: `${Songs?.images[0]?.url}` }}>
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
                {Songs?.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#f4511e",
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                  marginHorizontal: 10,
                }}
              >
                <Entypo name="controller-play" size={32} color={"#FFFFFF"} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Artitts: </Text>
        {Songs?.artists?.map((data, index) => (
          <Text key={index}>{data?.name}</Text>
        ))}
      </View>
      <View style={{ margin: 20, gap: 10 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Released On:{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>{Songs?.release_date}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Total Tracks:{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>{Songs?.total_tracks}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Type: </Text>
          <Text style={{ fontSize: 16 }}>{Songs?.type}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
