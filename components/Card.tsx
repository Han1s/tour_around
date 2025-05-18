import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  Dimensions,
  Pressable,
} from "react-native";
import { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
const HEIGHT = 225;
const WIDTH = Dimensions.get("window").width;

export interface CardProps {
  images: string[];
  title: string;
  price: number;
  rating: number;
  favorite: boolean;
  length: number;
  onPress?: () => any;
}

export default function Card({
  images,
  title,
  price,
  rating,
  favorite,
  onPress,
  length,
  ...rest
}: CardProps) {
  const [favoriteItem, setFavoriteItem] = useState<boolean>(favorite);
  const [activeIndex, setActiveIndex] = useState(0);

  const flatListRef = useRef<FlatList | null>(null);
  const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setActiveIndex(changed[0].index);
    }
  });

  const handleFavoriteItemClicked = () => {
    setFavoriteItem(!favoriteItem);
    console.log("make some backend request");
  };

  const imageMapper = [
    require("../assets/images/placeholder_image_1.jpg"),
    require("../assets/images/placeholder_image_2.jpg"),
  ];

  return (
    <View style={[styles.cardContainer]} {...rest}>
      <Pressable
        onPress={handleFavoriteItemClicked}
        style={styles.favoriteContainer}
      >
        <Ionicons
          name={favoriteItem ? "heart" : "heart-outline"}
          size={24}
          color={favoriteItem ? "#FF5A5F" : "white"}
        />
      </Pressable>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        ref={(ref) => (flatListRef.current = ref)}
        snapToAlignment="center"
        pagingEnabled
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({ item, index }) => {
          return (
            <Pressable onPress={onPress} style={styles.imageContainer}>
              {/* TODO: replace with links */}
              <Image style={styles.image} source={imageMapper[index]} />
            </Pressable>
          );
        }}
      />
      {images.length > 1 && (
        <View style={styles.dotContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                {
                  opacity: index === activeIndex ? 1 : 0.5,
                },
                styles.dot,
              ]}
            />
          ))}
        </View>
      )}
      <Pressable onPress={onPress} style={styles.textContainer}>
        <View className={"flex-row justify-between"}>
          <View>
            <Text style={styles.heading}>{title}</Text>
          </View>
          <View style={styles.starContainer}>
            <Ionicons name="star" size={16} color="#FF5A5F" />
            <Text style={styles.starText}>{rating.toString()}</Text>
          </View>
        </View>
        <View className={"flex flex-row justify-between w-full"}>
          <Text style={styles.subheading}>${price.toString()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 16,
    width: WIDTH,
    borderRadius: 10,
  },
  favoriteContainer: {
    position: "absolute",
    top: 10,
    right: 40,
    zIndex: 10,
    padding: 10,
  },
  imageContainer: { width: WIDTH - 32 },
  image: {
    width: "100%",
    height: HEIGHT,
    borderRadius: 10,
  },
  dotContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    top: HEIGHT - 20,
    alignSelf: "center",
  },
  dot: {
    width: 5,
    height: 5,
    margin: 3,
    borderRadius: 30,
    backgroundColor: "white",
  },
  textContainer: { marginTop: 10 },
  starContainer: { flexDirection: "row" },
  starText: { marginLeft: 5 },
  heading: { fontSize: 16, fontWeight: "bold" },
  subheading: { fontSize: 16 },
});
