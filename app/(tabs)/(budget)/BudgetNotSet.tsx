import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Button from "@/components/button";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const BudgetNotSet = ({
  color = "#5B5C62",
}: {
  color?: string;
}) => {
  // change button function
  return (
    <View className="flex-1 justify-center items-center bg-[#131316]">
      <FontAwesome5 className="mt-10 mb-5" name="poop" size={40} color={color} />
      <Text className="text-base font-semibold text-[#5B5C62] mb-10">
        Looks like you have yet to set a budget
      </Text>
      <Button
        title="Set Budget"
        keyProp="lego"
        onPress={async (key) => {
          try {
            console.log("Data saved successfully to lego!");
          } catch (error) {
            console.log("Error saving data:", error);
          }
        }}
      />
    </View>
  );
};

export default BudgetNotSet;