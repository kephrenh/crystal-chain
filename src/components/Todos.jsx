import { useMutation, useQuery } from "@tanstack/react-query";
import todosApi, { getUserTodos } from "../api/todosApi";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todos = ({ userId }) => {
  const userTodos = useQuery({
    queryKey: ["todos", userId],
    queryFn: () => getUserTodos(userId),
    enabled: userId !== undefined,
  });

  const { isLoading, data: todos, isError: isErrorTodos, error: errorTodos } = userTodos;

  const updateTodoMutation = useMutation({
    mutationKey: ["todos", userId],
    mutationFn: async (todo) => {
      const response = await todosApi.patch(`/todos/${todo.id}`, todo);
      return response.data;
    },
  });

  const { isPending, isError: isErrorCheck, error: errorCheck } = updateTodoMutation;

  let content;
  if (isErrorTodos) {
    content = <span>Error: {errorTodos.message || errorCheck.message}</span>;
  } else if (isErrorCheck) {
    content = <span>Error: {errorCheck.message}</span>;
  } else if (isLoading) {
    content = <span>Loading...</span>;
  } else {
    content = (
      <>
        {isPending ? <span className="my-4">Pending...</span> : <TodoForm id={userId} />}
        {todos.data.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todoId={todo.id}
              completed={todo.completed}
              title={todo.title}
              onChange={() => {
                updateTodoMutation.mutate({ ...todo, completed: !todo.completed });
              }}
            />
          );
        })}
      </>
    );
  }

  return (
    <section className="flex flex-col gap-1">
      <h3 className="underline mb-1">Todo List</h3>
      <ul className="flex flex-col gap-1">{content}</ul>
    </section>
  );
};
export default Todos;
