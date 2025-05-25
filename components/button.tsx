import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
    title: string;
    keyProp?: string;
    disableOnPress?: boolean; // optional prop to disable the button
    onPress: (key: string) => void; // no ? because is required
}

export default function Button({
    title,
    keyProp,
    disableOnPress = false,
    onPress,
}: ButtonProps) {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const defaultKey = "my-key"; // default key if keyProp is not provided
    return (
        <TouchableOpacity
            style={{
                backgroundColor: buttonDisabled ? "#aaa" : "#FFD33D",
                padding: 12,
                borderRadius: 20,
                marginBottom: 20,
                minWidth: 150,
                alignItems: "center",
            }}
            disabled={disableOnPress && buttonDisabled}
            onPress={async () => {
                // only disable the button if disableOnPress is true
                disableOnPress ? setButtonDisabled(true) : false;
                console.log("Button pressed with key:", keyProp ?? defaultKey);
                onPress(keyProp ?? defaultKey);
            }}
        >
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
        </TouchableOpacity>
    );
}
