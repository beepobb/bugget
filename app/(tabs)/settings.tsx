import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "@/components/button";

const Settings = () => {
  return (
    <View className="flex-1 justify-center items-center bg-green-300">
      <Text className="text-lg">Settings</Text>
      <Button
        title="Clear storage"
        onPress={async () => {
          try {
            await AsyncStorage.clear();
            console.log("Storage cleared!");
          } catch (e) {
            console.error("Failed to clear storage", e);
          }
        }}
      />
    </View>
  );
};

export default Settings;
