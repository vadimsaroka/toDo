import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Context } from "../context/ToDoContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const toDo = state.find((toDo) => {
    return toDo.id === navigation.getParam("id");
  });

  return (
    <View>
      <Text style={{ textDecorationLine: "underline", fontSize: 25 }}>
        {toDo.title}
      </Text>
      <Text style={{ fontSize: 16 }}>{toDo.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
