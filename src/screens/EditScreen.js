import React, { useContext } from "react";
import ToDoForm from "../components/ToDoForm.js";
import { Context } from "../context/ToDoContext";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editToDo } = useContext(Context);

  const toDo = state.find((toDo) => {
    return toDo.id === id;
  });

  return (
    <ToDoForm
      initialValues={{ title: toDo.title, content: toDo.content }}
      onSubmit={(title, content) => {
        editToDo(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

export default EditScreen;
