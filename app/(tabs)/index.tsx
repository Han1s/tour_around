import { Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import Button from "@/components/Button";

export default function SearchScreen() {
  return (
    <View className={"flex-1 items-center bg-[#25292e]"}>
      <View>
        <TextInput
          className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
          placeholder="Enter email or username"
        />
      </View>
      <Text className={"text-white text-xl p-2"}>Search Link</Text>
      <Text className={"text-white text-xl p-2"}>List of Cards</Text>
      <Text className={"text-white text-xl p-2"}>Card 1</Text>
      <Text className={"text-white text-xl p-2"}>Card 2</Text>
    </View>
  );
}
