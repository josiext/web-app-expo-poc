import { Button, Platform, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import * as DocumentPicker from "expo-document-picker";

export default function TabTwoScreen() {
  const handleSelectFile = () => {
    DocumentPicker.getDocumentAsync({
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }).then((file) => {
      const uri = file?.assets?.[0];

      console.log("uri: ", uri);

      /*  FileSystem.readAsStringAsync(uri as string).then((content) => {
        console.log("content", content);
      }); */
    });
  };

  return (
    <View style={styles.container}>
      {Platform.OS === "web" ? (
        <Button title="Subir excel" onPress={handleSelectFile} />
      ) : (
        <Button title="Ir a web para subir excel" onPress={handleSelectFile} />
      )}
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
