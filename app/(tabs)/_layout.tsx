import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Platform, Pressable, Text, View } from "react-native";
import { WebHeader } from "../Header";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={
        Platform.OS === "web"
          ? () => (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                }}
              ></View>
            )
          : undefined
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Causas",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          header: Platform.OS === "web" ? () => <WebHeader /> : undefined,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Movimientos",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          header: Platform.OS === "web" ? () => <WebHeader /> : undefined,
        }}
      />
    </Tabs>
  );
}
