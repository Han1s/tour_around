import { FlatList, StyleSheet, TextInput, View, Text } from "react-native";
import { COLORS } from "@/lib/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card, { CardProps } from "@/components/Card";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

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
    // FIXME: Flatlist bug? The conversion does not work within the extractor even as a template literal for some reason
    const mappedData = (data || []).map((item) => ({
      ...item,
      id: `${item.id}`,
    })) as Tour[];
    setTours(mappedData);
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
            <Card {...item} images={[]} rating={4} price={4} favorite={false} />
          );
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
