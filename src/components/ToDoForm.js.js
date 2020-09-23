import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const ToDoForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput
        defaultValue={title}
        style={styles.input}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        defaultValue={content}
        style={styles.input}
        onChangeText={(text) => {
          setContent(text);
        }}
      />
      <Button
        onPress={() => {
          onSubmit(title, content);
        }}
        title="Save"
      />
    </View>
  );
};

ToDoForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    marginTop: 15,
  },
});

export default ToDoForm;
