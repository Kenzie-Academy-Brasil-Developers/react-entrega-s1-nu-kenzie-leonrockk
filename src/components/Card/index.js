import "./style.css";
import trash from "./trash.svg";

export default function Card({ transaction, handleTransaction }) {
  return (
    <div
      style={{
        borderLeft:
          transaction.type === "Entrada"
            ? "5px solid green"
            : " 5px solid grey",
      }}
      className="CardContainer"
    >
      <div className="CardLeft">
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div className="CardRight">
        <h4>R${transaction.value}</h4>
        <button onClick={() => handleTransaction(transaction)}>
          <img src={trash} className="trashCan" alt="delete" />
        </button>
      </div>
    </div>
  );
}
