import "./UserCard.css";

function UserCard({ name, fruitName, fruitEmoji }) {
  return (
    <div className="card">
      <h2 className="user">{name}</h2>
      <p>
        {fruitName} {fruitEmoji}
      </p>
    </div>
  );
}

export default UserCard;
