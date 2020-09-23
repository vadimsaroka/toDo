import React, { useContext } from "react";
import { Context } from "../context/ToDoContext";
import ToDoForm from "../components/ToDoForm.js";

const CreateScreen = ({ navigation }) => {
  const { addToDo } = useContext(Context);

  return (
    <ToDoForm
      onSubmit={(title, content) => {
        addToDo(title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
};

export default CreateScreen;
