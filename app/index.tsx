import { router } from "expo-router";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>CaseTracking</Text>

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Enter your email"
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Enter your password"
      />

      <Button
        title="Login"
        onPress={() => {
          router.push("/(tabs)");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
