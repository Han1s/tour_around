import { FlatList, StyleSheet, TextInput, View, Text } from "react-native";
import { COLORS } from "@/lib/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card, { CardProps } from "@/components/Card";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

const MOCK_CARDS: Array<CardProps & { id: string }> = [
  {
    images: ["image_link_1", "image_link_2"],
    price: 4,
    favorite: true,
    title: "Activity Tour",
    rating: 5,
    id: "1",
  },
  {
    images: ["image_link_1", "image_link_2"],
    price: 4,
    favorite: false,
    title: "Sightseeing tour",
    rating: 4,
    id: "2",
  },
  {
    images: ["image_link_1", "image_link_2"],
    price: 4,
    favorite: false,
    title: "Coffee tour",
    rating: 3,
    id: "3",
  },
  {
    images: ["image_link_1", "image_link_2"],
    price: 4,
    favorite: true,
    title: "Rural tour",
    rating: 2,
    id: "4",
  },
  {
    images: ["image_link_1", "image_link_2"],
    price: 4,
    favorite: false,
    title: "Bike tour",
    rating: 1,
    id: "5",
  },
];

export default function SearchScreen() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTours().then(() => {
      setLoading(false);
    });
  }, []);

  const getTours = async () => {
    const { data } = await supabase.from("tours").select();
    console.log(data);
    setTours(data as Tour[]);
    setLoading(false);
  };

  if (loading) return <Text>Loading...</Text>;

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
        data={tours}
        renderItem={({ item }) => {
          return (
            <Card
              {...item}
              images={MOCK_CARDS[0].images}
              rating={4.2}
              favorite={false}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
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
