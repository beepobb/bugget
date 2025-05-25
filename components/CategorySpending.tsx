import React from "react";
import { View, Text, ViewStyle } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";

// TODO:
// - no. of transactions in this category: count
// - budget for this category: getItem
// - total spending in this category: getTotal
// - min width of bar if got transaction: 5%

const iconPacks = {
    FontAwesome5,
    MaterialCommunityIcons,
    Ionicons,
    Fontisto,
};

type IconPackName = keyof typeof iconPacks;

interface CategorySpendingProps {
    //   barColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    categoryName?: string;
    transactionCount?: number;
    amountSpent?: number;
    categoryBudget?: number;
    iconName?:
        | keyof typeof Ionicons.glyphMap
        | keyof typeof FontAwesome5.glyphMap
        | keyof typeof MaterialCommunityIcons.glyphMap
        | keyof typeof Fontisto.glyphMap;
    iconLibrary?: IconPackName;
}

export default function CategorySpending({
    primaryColor = "#8F8F8F",
    secondaryColor = "#2F2F2F",
    accentColor = "#282D23",
    categoryName = "Transportation",
    transactionCount = 0,
    amountSpent = 0,
    categoryBudget = 0,
    iconName = "poop",
    iconLibrary = "FontAwesome5",
}: CategorySpendingProps) {
    const barProgress =
        categoryBudget > 0 ? (amountSpent / categoryBudget) * 100 : 0;
    const barWidth: ViewStyle["width"] =
        barProgress > 0 && barProgress < 5 ? "5%" : `${barProgress}%`;
    const MultiPackIcon: React.FC<CategorySpendingProps> = ({
        iconLibrary: IconPackName,
        iconName,
    }) => {
        const IconComponent = iconPacks[iconLibrary];
        return (
            <IconComponent
                name={iconName as any}
                size={36}
                color={primaryColor}
            />
        );
    };

    return (
        <View
            className="w-4/5 bg-[#1E1E23] shadow-2xl p-6 rounded-lg my-4"
            style={{
                shadowColor: "#000", // Shadow color
                shadowOffset: { width: 0, height: 4 }, // 0px horizontal, 4px vertical offset
                shadowOpacity: 0.25, // Opacity of the shadow
                shadowRadius: 4, // Blur radius (4px)
                elevation: 5, // For Android to make shadow visible
            }}
        >
            <View className="h-16 flex-row ">
                <View
                    className="w-16 h-full shadow-xl rounded-lg justify-center items-center"
                    style={{ backgroundColor: accentColor }}
                >
                    <MultiPackIcon
                        iconLibrary={iconLibrary}
                        iconName={iconName}
                    />
                </View>
                <View className="h-full mt-2 ml-4 flex-col ">
                    <Text className="text-xl font-bold text-white">
                        {categoryName}
                    </Text>
                    <Text className="text-base text-gray-500">
                        {transactionCount > 1
                            ? `${transactionCount} Transactions`
                            : `${transactionCount} Transaction`}
                    </Text>
                </View>
            </View>
            <View className="w-full first-line:flex-col items-end">
                <View className="flex-row ">
                    <Text
                        className="text-sm font-semibold"
                        style={{ color: primaryColor }}
                    >
                        ${amountSpent}
                    </Text>
                    <Text
                        className="text-sm  font-semibold"
                        style={{ color: secondaryColor }}
                    >
                        /${categoryBudget}
                    </Text>
                </View>
                <View
                    className="w-full h-4 mt-2 rounded-xl justify-end items-start"
                    style={{ backgroundColor: accentColor }}
                >
                    <View
                        className="absolute h-4 mt-2 rounded-2xl"
                        style={{
                            backgroundColor: primaryColor,
                            width: barWidth,
                        }}
                    ></View>
                </View>
            </View>
        </View>
    );
}
