import "./index.css";

const Card = ({ data }) => {
  return (
    <div className={`Card ${data.completed}`}>
      <h4 className="Card__title">{data.title}</h4>
      {data.completed && <span> 🌈 </span>}
    </div>
  );
};

export default Card;
