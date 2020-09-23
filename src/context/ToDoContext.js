import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const toDoReducer = (state, action) => {
  switch (action.type) {
    case "get_todo":
      return action.payload;
    case "delete_todo":
      return state.filter((toDo) => toDo.id !== action.payload);
    case "edit_todo":
      return state.map((toDo) => {
        return toDo.id === action.payload.id ? action.payload : toDo;
      });
    default:
      return state;
  }
};

const getTodo = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/todo");
    console.log(response.data);
    dispatch({ type: "get_todo", payload: response.data });
  };
};

const addToDo = () => {
  return async (title, content, callback) => {
    await jsonServer.post("/todo", { title, content });
    if (callback) {
      callback();
    }
  };
};

const deleteToDo = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/todo/${id}`);
    dispatch({ type: "delete_todo", payload: id });
  };
};

const editToDo = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/todo/${id}`, { title, content });
    dispatch({ type: "edit_todo", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  toDoReducer,
  { addToDo, deleteToDo, editToDo, getTodo },
  []
);
