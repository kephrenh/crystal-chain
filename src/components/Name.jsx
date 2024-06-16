const Name = ({ name, username }) => {
  return (
    <div className="grid grid-cols-1 gap-1">
      <p>
        <span className="font-bold">Name:</span> {name}
      </p>
      <p>
        <span className="font-bold">Username:</span> {username}
      </p>
    </div>
  );
};
export default Name;
