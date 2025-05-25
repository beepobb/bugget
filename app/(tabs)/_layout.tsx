import { Tabs } from "expo-router";
import { ImageBackground } from "expo-image";
import { Image } from "react-native";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ffd33d",
        tabBarInactiveTintColor: "#5B5C62",
        tabBarStyle: {
          backgroundColor: "#25292E",
          borderTopColor: "#25292E",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Expense",
        }}
      />
      <Tabs.Screen
        name="(budget)"
        options={{
          title: "Budget",
        }}
      />
      <Tabs.Screen name="history" options={{ title: "History" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
};

export default _Layout;
