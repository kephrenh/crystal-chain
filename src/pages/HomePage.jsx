import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/todosApi";
import UsersList from "../components/UsersList";

const HomePage = () => {
  const {
    data: users,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) {
    return <h1>{`Error: ${error.message}`}</h1>;
  }

  return (
    <div className="flex flex-col gap-4 mt-6 px-10">
      <h1>Users</h1>
      <ul className="list-none w-[40%] flex flex-col space-y-4">
        <UsersList users={users} />
      </ul>
    </div>
  );
};

export default HomePage;
