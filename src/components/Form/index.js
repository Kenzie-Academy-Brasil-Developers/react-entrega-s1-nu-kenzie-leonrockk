import "./style.css";
import { useForm } from "react-hook-form";

export default function Form({ listTransactions, setListTransactions }) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="Form">
      <form
        onSubmit={handleSubmit((data) => {
          {
            data.type !== "Entrada"
              ? (data.value = data.value - data.value * 2)
              : (data.value = data.value);
          }
          setListTransactions([...listTransactions, data]);
        })}
      >
        <label for="Descrição">Descrição</label>
        <input className="formDescription"
          type="text"
          placeholder="Digite sua descrição"
          name="Descrição"
          {...register("description")}
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
              {...register("value")}
            ></input>
          </div>
          <div className="FormSplit">
            <label for="tipoValor">Tipo de Valor</label>
            <select
              className="halfMiddle"
              name="tipoValor"
              {...register("type")}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir Valor</button>
      </form>
    </div>
  );
}
