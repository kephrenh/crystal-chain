import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaTrashCan } from "react-icons/fa6";
import todosApi from "../api/todosApi";

const TodoItem = ({ completed, title, todoId, onChange }) => {
  const queryClient = useQueryClient();

  const deleteTotoMutation = useMutation({
    mutationKey: ["todos"],
    mutationFn: async ({ id }) => {
      const response = await todosApi.delete(`/posts/${id}`, id);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const { isPendingDelete, isErrorDelete, errorDelete } = deleteTotoMutation;

  if (isPendingDelete) {
    return <span>Pending...</span>;
  }
  if (isErrorDelete) {
    return <span>Error: {errorDelete.message}</span>;
  }

  return (
    <li className="flex items-center justify-between w-[70%]">
      <div>
        <input
          className="mr-2"
          type="checkbox"
          id={todoId}
          checked={completed}
          name={title}
          onChange={onChange}
        />

        <label className="w-full">{title}</label>
      </div>
      <div>
        <FaTrashCan
          className="cursor-pointer text-lg text-red-700"
          onClick={() => deleteTotoMutation.mutate({ id: todoId })}
        />
      </div>
    </li>
  );
};
export default TodoItem;
