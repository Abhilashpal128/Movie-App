import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons"; // or any other icon set

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [AllMovies, setAllMovies] = useState([]);
  const navigation = useNavigation();
  const ImageUri = "https://image.tmdb.org/t/p/w500";
  const numColumns = 3;
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth / numColumns - 20;
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=136b6ee4e6eaedf9acaa706efcbf2133",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzZiNmVlNGU2ZWFlZGY5YWNhYTcwNmVmY2JmMjEzMyIsIm5iZiI6MTcyNjEzNjI2MS4zMDQxODYsInN1YiI6IjY2ZTJiZWNkYzgxYjI0YjNmZTIzODcyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6vGzVOyK-tZEt69e-50rzasmddlGz-SWYKES_vPhCas",
            "Content-Type": "application/json",
          },
        }
      );

      setMovies(response?.data?.results);
      setAllMovies(response?.data?.results);
    } catch (error) {
      console.log(error);
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearchMovie = (text) => {
    const filtered = AllMovies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );
    setMovies(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MovieDescription", { item });
      }}
      style={{
        display: "flex",
        width: itemWidth,
        height: 140,
        margin: 5,
        // backgroundColor: "red",
        backgroundColor: "#D3D3D3",
        borderRadius: 3,
      }}
    >
      <Text style={{ flexWrap: "wrap", height: 40 }}>
        {item?.original_title}
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
          placeholder="Search Movie..."
          onChangeText={(text) => {
            handleSearchMovie(text);
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
          data={movies}
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
