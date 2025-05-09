import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "@/lib/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "@/components/Button";
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
      <Card />
      <Text className={"text-xl text-red-500 p-2"}>Search Link</Text>
      <Text className={"text-xl p-2"}>List of Cards</Text>
      <Text className={"text-xl p-2"}>Card 1</Text>
      <Text className={"text-xl p-2"}>Card 2</Text>
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
