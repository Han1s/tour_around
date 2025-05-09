import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/placeholder.png")} />
      </View>
      <Text>Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    aspectRatio: 1,
    height: 100,
  },
  imageContainer: {
    // aspectRatio: 1,
    width: "95%",
    aspectRatio: 1,
  },
});

export default Card;
