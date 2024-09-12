import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function Series() {
  const [series, setSeries] = useState([]);
  const [allSeries, setAllSeries] = useState([]);
  const navigation = useNavigation();
  const ImageUri = "https://image.tmdb.org/t/p/w500";
  const numColumns = 3;
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth / numColumns - 20;
  const fetchSeries = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=136b6ee4e6eaedf9acaa706efcbf2133",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzZiNmVlNGU2ZWFlZGY5YWNhYTcwNmVmY2JmMjEzMyIsIm5iZiI6MTcyNjEzNjI2MS4zMDQxODYsInN1YiI6IjY2ZTJiZWNkYzgxYjI0YjNmZTIzODcyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6vGzVOyK-tZEt69e-50rzasmddlGz-SWYKES_vPhCas",
            "Content-Type": "application/json",
          },
        }
      );

      setSeries(response?.data?.results);
      setAllSeries(response?.data?.results);
    } catch (error) {
      console.log(error);
      setSeries([]);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const handleSearchSeries = (text) => {
    const filtered = allSeries.filter((item) =>
      item.original_name.toLowerCase().includes(text.toLowerCase())
    );
    setSeries(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SeriesDescription", { item });
      }}
      style={{
        display: "flex",
        width: itemWidth,
        height: 140,
        margin: 5,
        backgroundColor: "#D3D3D3",
        borderRadius: 3,
      }}
    >
      <Text style={{ flexWrap: "wrap", height: 40 }}>
        {item?.original_name}
      </Text>
      <Image
        source={{ uri: `${ImageUri}${item?.poster_path}` }}
        height={100}
        width={100}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ width: "100%", backgroundColor: "#ffffff" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          marginHorizontal: "auto",
          marginVertical: 10,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: "#ccc", // Border color
          backgroundColor: "#fff",
        }}
      >
        <Icon name="search" size={20} color="#000" style={{ marginLeft: 10 }} />
        <TextInput
          style={{ flex: 1, paddingLeft: 10, height: 40 }}
          placeholder="Search Series..."
          onChangeText={(text) => {
            handleSearchSeries(text);
          }}
        />
      </View>
      <View
        style={{
          width: "95%",
          marginHorizontal: "auto",
          marginBottom: 150,
        }}
      >
        <FlatList
          data={series}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          style={{ marginHorizontal: "auto" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
