import { Link } from "expo-router";
import { Text, View } from "react-native";

export const WebHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#11161A",
        padding: 20,
        gap: 40,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
        }}
      >
        CaseTracking Lite
      </Text>

      <Link href={"/(tabs)"}>
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          Causas
        </Text>
      </Link>

      <Link href={"/(tabs)/two"}>
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          Movimientos
        </Text>
      </Link>
    </View>
  );
};
