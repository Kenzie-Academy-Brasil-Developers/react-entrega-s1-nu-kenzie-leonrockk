import "./style.css";
export default function TotalMoney({ listTransactions }) {
  const total = listTransactions.reduce(
    (previousValue, currentValue) => previousValue + Number(currentValue.value),
    0
  );
  return (
    <div className="totalContainer">
      <div className="totalLeft">
        <h3>Valor total</h3>
        <p>O valor se refere ao saldo:</p>
      </div>
      <div className="totalRight">
        <h4>R${total}</h4>
      </div>
    </div>
  );
}
