import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, FAB } from "react-native-paper";

function AddNotes({ navigation }: any) {
  const [state, setState] = useState(true);
  console.log("state",state);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add Notes modal screen</Text>
      </View>
      <FAB
        style={styles.fab}
        small
        icon="minus"
        label="View notes"
        onPress={() => navigation.navigate("ViewNotes") && setState(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },

  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    top: 10,
    color: "red",
  },
});

export default AddNotes;
