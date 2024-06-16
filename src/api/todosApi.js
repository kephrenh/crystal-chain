import axios from "axios";

const todosApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// GET
// fetch all todos
export const getTodos = async () => {
  const response = await todosApi.get("/todos");
  return response.data;
};

// GET
// fetch all users
export const getUsers = async () => {
  const response = await todosApi.get("/users");
  return response.data;
};

// GET
// fetch a user by their id
export const getUser = async (userId) => {
  const response = await todosApi.get(`/users/${userId}`);
  return response.data;
};

// GET
// fetch the todos of a specific user
export const getUserTodos = async (userId) => {
  return await todosApi.get(`/todos?userId=${userId}`);
};

// POST
// create a new todo
export const addTodo = async ({ id, userId, completed, title }) => {
  const response = await todosApi.post("/todos", {
    id,
    userId,
    completed,
    title,
  });
  return response.data;
};

export default todosApi;
