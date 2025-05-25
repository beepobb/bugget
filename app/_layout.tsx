import { Stack, Tabs } from "expo-router";
import "./globals.css";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
    const insets = useSafeAreaInsets();
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    paddingTop: insets.top,
                    backgroundColor: "#131316",
                },
            }}
        ></Stack>
    );
}
