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

export default function Songs() {
  const [songs, setSongs] = useState([]);
  const [allSongs, setallsongs] = useState([]);

  const navigation = useNavigation();
  const numColumns = 3;
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth / numColumns - 20;

  // "https://v1.nocodeapi.com/abhilashpal/spotify/QfPsNVwXgsodUyGX/browse/new"
  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "https://v1.nocodeapi.com/abhilashpal/spotify/QfPsNVwXgsodUyGX/browse/new"
      );
      setSongs(response?.data?.albums?.items);
      setallsongs(response?.data?.albums?.items);
    } catch (error) {
      console.log(error);
      setSongs([]);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const handleSearchSong = (text) => {
    const filtered = allSongs.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSongs(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SongsDescription", { item });
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
      <Text style={{ flexWrap: "wrap", height: 40 }}>{item?.name}</Text>
      <Image
        source={{ uri: `${item?.images[0]?.url}` }}
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
          placeholder="Search Songs..."
          onChangeText={(text) => {
            handleSearchSong(text);
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
          data={songs}
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
