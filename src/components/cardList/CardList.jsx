import Card from "../card";
import "./index.css";

const CardList = ({ todos }) => {
  return (
    <div className="CardList">
      {todos.map((todo) => (
        <Card data={todo} key={todo.id}></Card>
      ))}
    </div>
  );
};
export default CardList;
