import { Tabs } from 'expo-router';
import {ImageBackground} from "expo-image";
import {Image} from "react-native";

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title:'Home',
                    headerShown: false,
                }}
                />
            <Tabs.Screen
            name="budget"
                options={{ title:'Budget', headerShown: false }}
                />
            <Tabs.Screen
                name="history"
                options={{ title:'History', headerShown: false}}
                />
            <Tabs.Screen
                name="settings"
                options={{ title:'Settings', headerShown: false }}
                />
        </Tabs>
    )
}

export default _Layout