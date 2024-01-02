import { ScrollView, StyleSheet } from "react-native";
import { useQuery } from "react-query";
import { Text, View } from "../../components/Themed";

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

export default function TabOneScreen() {
  const query = useQuery("todos", getData);

  return (
    <ScrollView style={styles.container}>
      {query?.data?.map((todo: any) => (
        <View
          key={todo.id}
          style={{
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}
        >
          <Text>{todo.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 1,
    backgroundColor: "#f8f8f8",
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
