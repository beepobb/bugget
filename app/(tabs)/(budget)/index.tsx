import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import CategorySpending from "@/components/CategorySpending";

// need to dynamically add CategorySpending

const Budget = () => {
    // conditional rendering based on budget status
    const [budgetSet, setBudgetSet] = useState(false);
    return (
        <View className="flex-1 justify-center items-center bg-[#131316]">
            <View className="h-2/5  items-center justify-center w-full">
                {/* <Button
          title="Route to Budget Not Set"
          onPress={async () => {
            router.push("/BudgetNotSet");
          }}
        /> */}
                <Text className="text-2xl font-bold text-white mb-6">
                    Budget
                </Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="w-full h-full"
                contentContainerStyle={{ paddingTop: 20, alignItems: "center" }}
            >
                <CategorySpending
                    primaryColor="#70C76E"
                    secondaryColor="#647651"
                    accentColor="#282D23"
                    categoryName="Food"
                    transactionCount={6}
                    amountSpent={52}
                    categoryBudget={100}
                    iconName="fast-food-outline"
                    iconLibrary="Ionicons"
                />
                <CategorySpending
                    primaryColor="#189EC7"
                    secondaryColor="#2E7083"
                    accentColor="#122D35"
                    categoryName="Travel"
                    transactionCount={0}
                    amountSpent={0}
                    categoryBudget={500}
                    iconName="umbrella-beach-outline"
                    iconLibrary="MaterialCommunityIcons"
                />
                <CategorySpending
                    primaryColor="#E394FF"
                    secondaryColor="#9F79A5"
                    accentColor="#451F4B"
                    categoryName="Shopping"
                    transactionCount={1}
                    amountSpent={8.42}
                    categoryBudget={30}
                    iconName="bag-outline"
                    iconLibrary="Ionicons"
                />
                <CategorySpending
                    primaryColor="#FFE169"
                    secondaryColor="#9F8524"
                    accentColor="#4D4627"
                    categoryName="Transportation"
                    transactionCount={3}
                    amountSpent={28.90}
                    categoryBudget={35}
                    iconName="bus-outline"
                    iconLibrary="Ionicons"
                />
            </ScrollView>
        </View>
    );
};

export default Budget;
