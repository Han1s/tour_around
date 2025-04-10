import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Search() {
  return (
    <View className={"flex-1 justify-center items-center bg-[#25292e]"}>
      <Text className={"text-5xl text-white font-bold"}>Explore Screen</Text>
      <Link href={"/tours"} className={"text-white text-xl p-2 underline"}>
        Tours
      </Link>
      <Link href={"/profile"} className={"text-white text-xl p-2 underline"}>
        Profile
      </Link>
      <Link href={"/about"} className={"text-white text-xl p-2 underline"}>
        About
      </Link>
    </View>
  );
}
