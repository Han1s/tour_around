import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "@/lib/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card from "@/components/Card";

export default function SearchScreen() {
  return (
    <View className={"flex-1 items-center bg-[#fefefe] px-4"}>
      <View style={styles.inputContainer}>
        <Ionicons
          name={"search"}
          size={16}
          style={styles.inputIcon}
          color={COLORS.blue["100"]}
        />
        <TextInput style={styles.input} placeholder="Enter email or username" />
      </View>
      <Card
        images={[
          "../assets/images/placeholder_image_1.jpg",
          "../assets/images/placeholder_image_2.jpg",
        ]}
        onPress={() => {}}
        favorite={false}
        heading={"City Tour"}
        price={4}
        stars={4.3}
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
    maxHeight: 48,
    borderRadius: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.grey["200"],
  },
  inputIcon: {
    padding: 10,
  },
});
