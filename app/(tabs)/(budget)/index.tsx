import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Button from "@/components/button";
import { router } from "expo-router";
import CategorySpending from "@/components/CategorySpending";

const Budget = () => {
  // conditional rendering based on budget status
  const [budgetSet, setBudgetSet] = useState(false);
  return (
    <View className="flex-1 justify-center items-center bg-[#ffffff]">
      <View className="h-1/5  items-center justify-end w-full bg-white shadow-sm">
        {/* <Button
          title="Route to Budget Not Set"
          onPress={async () => {
            router.push("/BudgetNotSet");
          }}
        /> */}
        <Text className="text-2xl font-bold text-[#5B5C62] mb-6">
            Budget
        </Text>
      </View>
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{ alignItems: "center" }}
      >
        <CategorySpending />
        <CategorySpending />
        <CategorySpending />
        <CategorySpending />
        <CategorySpending />
      </ScrollView>
    </View>
  );
};

export default Budget;
