import React from "react";
import { View, Text } from "react-native";

// TODO:
// - no. of transactions in this category: count
// - budget for this category: getItem
// - total spending in this category: getTotal

export default function CategorySpending({
  barColor = "#ffffff",
  categoryName = "Transportation",
}: {
  barColor?: string;
  categoryName?: string;
}) {
  return (
    <View className="w-5/6 bg-pink-200 p-6 rounded-lg my-4">
      <View className=" h-16 flex-row ">
        <View className="w-16 h-full border-2 bg-yellow-950 rounded-lg"></View>
        <View className="h-full mt-2 ml-4 flex-col ">
          <Text className="text-2xl font-bold text-blue-500">
            {categoryName}
          </Text>
          <Text className="text-base">nani</Text>
        </View>
      </View>
      <View className="w-full mt-2 flex-col items-end">
        <Text className="text-sm">nei hou mous</Text>
        <View className="w-full h-6 mt-2 rounded-xl" style={{ backgroundColor: barColor }}></View>
      </View>
    </View>
  );
}
