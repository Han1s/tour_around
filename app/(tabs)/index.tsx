import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { COLORS } from "@/lib/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card, { CardProps } from "@/components/Card";

const MOCK_CARDS: Array<CardProps & { id: string }> = [
  {
    images: ["image_link_1", "image_link_2"],
    price: 4,
    favorite: true,
    heading: "Activity Tour",
    stars: 5,
    id: "1",
  },
  {
    images: ["image_link_1", "image_link_2"],
    price: 4,
    favorite: false,
    heading: "Sightseeing tour",
    stars: 4,
    id: "2",
  },
  {
    images: ["image_link_1", "image_link_2"],
    price: 4,
    favorite: false,
    heading: "Coffee tour",
    stars: 3,
    id: "3",
  },
  {
    images: ["image_link_1", "image_link_2"],
    price: 4,
    favorite: true,
    heading: "Rural tour",
    stars: 2,
    id: "4",
  },
  {
    images: ["image_link_1", "image_link_2"],
    price: 4,
    favorite: false,
    heading: "Bike tour",
    stars: 1,
    id: "5",
  },
];

export default function SearchScreen() {
  return (
    <View className={"items-center bg-[#fefefe] flex-1"}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.inputContainer}>
            <Ionicons
              name={"search"}
              size={16}
              style={styles.inputIcon}
              color={COLORS.blue["100"]}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter email or username"
            />
          </View>
        }
        style={{ width: "100%", marginTop: 20 }}
        contentContainerStyle={{ gap: 30 }}
        data={MOCK_CARDS}
        renderItem={({ item }) => {
          return <Card {...item} />;
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  inputContainer: {
    paddingVertical: 4,
    marginHorizontal: 16,
    maxHeight: 48,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.grey["200"],
  },
  inputIcon: {
    padding: 10,
  },
});
