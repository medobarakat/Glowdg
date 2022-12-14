import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

const { width } = Dimensions.get("window");

const SPACING = 5;
const ITEM_LENGTH = width;
const BORDER_RADIUS = 20;

const ImageCarousel = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: ITEM_LENGTH }}>
              <View style={styles.itemContent}>
                <Image source={{ uri: item.uri }} style={styles.itemImage} />
                <Text style={styles.itemText} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {},
  itemContent: {
    marginHorizontal: SPACING * 3,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: BORDER_RADIUS + SPACING * 2,
  },
  itemText: {
    fontSize: 32,
    position: "absolute",
    bottom: SPACING,
    left: SPACING,
    color: "yellow",
    fontWeight: "600",
  },
  itemImage: {
    width: "100%",
    height: ITEM_LENGTH,
    borderRadius: BORDER_RADIUS,
    resizeMode: "cover",
  },
});
