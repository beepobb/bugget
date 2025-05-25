import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#ffd33d",
                tabBarInactiveTintColor: "#5B5C62",
                tabBarStyle: {
                    backgroundColor: "#131316",
                    borderTopColor: "#25292E",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Expense",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name="wallet"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="(budget)"
                options={{
                    title: "Budget",
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome6
                            name="sack-dollar"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: "History",
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5
                            name="calendar-alt"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome6
                            name="gear"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default _Layout;
