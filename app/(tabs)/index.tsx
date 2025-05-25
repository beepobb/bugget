import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className={"flex-1 justify-center items-center bg-yellow-300"}>
      <Text className="text-2xl font-bold mb-4">Welcome to the App!</Text>
    </View>
  );
}
