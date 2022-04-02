import "./profile.css";
import kenzieLogoBlack from "../../kenzieLogoBlack.svg";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import Button from "../../components/Filtro";
import { useState } from "react";
import emptyList from "../../emptyList.svg";

function ProfilePage() {
  const navigate = useNavigate();
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="profilePageContainer">
      <header className="profilePageHeader">
        <img
          src={kenzieLogoBlack}
          className="kenzieLogoBlack"
          alt="background Image"
        />
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Início
        </button>
      </header>
      <div className="mainContainer">
        <div className="leftPanel">
          <div className="formContainer">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </div>
          <div className="totalMoneyContainer">
            <TotalMoney listTransactions={listTransactions} />
          </div>
        </div>
        <div className="rightPanel">
          <div className="resumoFinanceiro">
            <h3>Resumo Financeiro</h3>
            {/* <div className="filtros">
              <Button
                listTransactions={listTransactions}
                children={"Todos"}
              ></Button>
              <Button
                listTransactions={listTransactions}
                children={"Entradas"}
              ></Button>
              <Button
                listTransactions={listTransactions}
                children={"Saídas"}
              ></Button>
            </div> */}
          </div>
          <div className="listOfEntries">
            {listTransactions.length === 0 ? (
              <img src={emptyList}></img>
            ) : (
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
