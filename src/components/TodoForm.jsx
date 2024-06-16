import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addTodo } from "../api/todosApi";

const TodoForm = ({ id }) => {
  // const titleRef = useRef();
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const postTodoMutation = useMutation({
    mutationKey: ["todos"],
    mutationFn: addTodo,
    onSuccess: (data) => {
      queryClient.setQueryData(["todos", data.id], data);
      queryClient.invalidateQueries(["todos"], { exact: true });
    },
  });

  const { isPending, isError, error } = postTodoMutation;

  const onSubmit = (e) => {
    e.preventDefault();
    postTodoMutation.mutate({
      title: title,
      completed: false,
      id: Date.now(),
      userId: id,
    });
    setTitle("");
  };

  return (
    <>
      {isError && <span>{error.message}</span>}
      <form
        onSubmit={onSubmit}
        className="my-4">
        <div>
          <input
            className="w-[50%] drop-shadow py-1 px-2 bg-gray-100 caret-blue-400 outline-blue-400 rounded-l-md rounded-r-none"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New todo..."
          />
          <button
            disabled={isPending}
            className="bg-blue-400 border-blue-400 rounded-l-none py-1 px-4 font-bold rounded-r-md text-white">
            {isPending ? "Pending..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};
export default TodoForm;
