import CardList from "./components/cardList";
import Card from "./components/card";
import Navbar from "./components/navbar";
import todos from "./mocks/todos";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState(todos);

  const allTodos = () => {
    setData(todos);
    console.log("allTodos");
  };
  const filterCompletedTodos = () => {
    setData(todos.filter((todo) => todo.completed === true));
    console.log("filterCompletedTodos");
  };
  const filterNotCompletedTodos = () => {
    setData(todos.filter((todo) => todo.completed === false));
    console.log("filterNotCompletedTodos");
  };
  return (
    <div className="App">
      <Navbar
        allTodos={allTodos}
        filterCompletedTodos={filterCompletedTodos}
        filterNotCompletedTodos={filterNotCompletedTodos}
      />
      <h1>First React App</h1>
      <div className="App__toDoList">
        {data.map((todo, index) => (
          <Card data={todo} key={index} />
        ))}
      </div>
    </div>
  );
}
export default App;
