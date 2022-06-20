import UserCard from "../UserCard/UserCard";

function UserList({ users }) {
  const renderedUsers = users.map((user) => {
    return (
      <UserCard
        key={user.id}
        name={user.name}
        fruitName={user.fruitName}
        fruitEmoji={user.fruitEmoji}
      />
    );
  });
  return <div>{renderedUsers}</div>;
}

export default UserList;
