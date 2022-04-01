import Card from "../Card";

export default function List({ listTransactions, setListTransactions }) {
  function handleTransaction(removeTransaction) {
    const filtered = listTransactions.filter(
      (transaction) => transaction !== removeTransaction
    );
    setListTransactions(filtered);
  }
  const newList = listTransactions.map((transaction, index) => (
    <Card
      transaction={transaction}
      key={index}
      handleTransaction={handleTransaction}
    />
  ));
  return <div>{newList}</div>;
}
