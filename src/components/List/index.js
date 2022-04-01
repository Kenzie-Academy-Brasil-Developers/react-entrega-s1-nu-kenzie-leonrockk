export default function List({ listTransactions }) {
  const newList = listTransactions.map((transaction, index) => (
    <Card transaction={transaction} key={index} />
  ));
  return <ul>{newList}</ul>;
}
