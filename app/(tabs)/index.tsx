import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className={"flex-1 justify-center items-center"}>
      <Text className={"text-5xl text-primary font-bold"}>Happy Birthday!</Text>
        <Link href={"/budget"} >Budget</Link>
        <Link href={"/history"} >History</Link>
        <Link href={"/settings"} >Settings</Link>
    </View>
  );
}
