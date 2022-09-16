import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Header, Icon } from "@rneui/themed";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";

const Home = ({ navigation }) => {
  const [FlatListData0, setFlatListData0] = useState([
    {
      id: "bd7acbrewea-c1b1-461231c2-aed5-3ad53abb28ba",
      photo: "https://dev.talbati.com/storage/media/1/1.png",
    },
    {
      id: "bd7acbrew44ea-c1b1-461231c2-aed5-3ad53abb28ba",
      photo: "https://dev.talbati.com/storage/media/2/2.png",
    },
  ]);
  return (
    <View>
      <FlatList
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        height={80}
        style={styles.FirstImgContainer}
        horizontal
        keyExtractor={(item) => item.id}
        data={FlatListData0}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.avatar }}
              resizeMode={"contain"}
              style={styles.bannerImg}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
