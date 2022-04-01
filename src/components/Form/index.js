import "./style.css";

export default function Form({ listTransactions, setListTransactions }) {
  return (
    <div className="Form">
      <form>
        <label for="Descrição">Descrição</label>
        <input
          type="text"
          placeholder="Digite sua descrição"
          name="Descrição"
        ></input>
        <span>Ex: Compra de Roupas</span>
        <div className="split">
          <div className="FormSplit">
            <label for="valor">Valor</label>
            <input
              className="halfMiddle"
              type="number"
              placeholder="1 R$"
              name="valor"
            ></input>
          </div>
          <div className="FormSplit">
            <label for="tipoValor">Tipo de Valor</label>
            <select className="halfMiddle" name="tipoValor">
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir Valor</button>
      </form>
    </div>
  );
}
