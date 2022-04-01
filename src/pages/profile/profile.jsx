import "./profile.css";
import kenzieLogoBlack from "../../kenzieLogoBlack.svg";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { useState } from "react";

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
            <Form />
          </div>
          <div className="totalMoneyContainer"></div>
        </div>
        <div className="rightPanel">
          <div className="listOfEntries"></div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
