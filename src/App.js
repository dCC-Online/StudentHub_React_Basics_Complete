import "./App.css";

import UserList from "./components/UserList/UserList";
import Title from "./components/Title/Title";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Brand from "./components/Brand/Brand";
import LogoutButton from "./components/LogoutButton/LogoutButton";

const users = [
  {
    id: 1,
    name: "JJ Vega",
    fruitName: "Banana",
    fruitEmoji: "🍌",
  },
  {
    id: 2,
    name: "David Lagrange",
    fruitName: "Strawberry",
    fruitEmoji: "🍓",
  },
  {
    id: 3,
    name: "Megan Cindric",
    fruitName: "Mango",
    fruitEmoji: "🥭",
  },
  {
    id: 4,
    name: "Brett Johnson",
    fruitName: "Orange",
    fruitEmoji: "🍊",
  },
  {
    id: 5,
    name: "Cash Myers",
    fruitName: "Grape",
    fruitEmoji: "🍇",
  },
  {
    id: 6,
    name: "Nevin Seibel",
    fruitName: "Pear",
    fruitEmoji: "🍐",
  },
];

function App() {
  return (
    <>
      <Header>
        <Brand />
        <LogoutButton />
      </Header>
      <Container>
        <Title />
        <UserList users={users} />
      </Container>
    </>
  );
}

export default App;
