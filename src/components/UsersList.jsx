import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <li
          className="text-lg font-semibold flex justify-between my-2 items-center w-full gap-10"
          key={user.id}>
          <h3>{user.name}</h3>
          <Link
            className="bg-blue-400 px-4  duration-300 hover:shadow-md hover:shadow-blue-400 hover:bg-blue-500 py-1 text-white border-white rounded-md"
            to={`/user/${user.id}`}>
            Profile
          </Link>
          {/* <div className="border-b-2 w-full border-gray-500"></div> */}
        </li>
      ))}
    </div>
  );
};
export default UsersList;
