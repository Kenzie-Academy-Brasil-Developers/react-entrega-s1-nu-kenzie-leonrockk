import kenzieLogo from "../../kenzieLogo.svg";
import index from "../../index.svg";
import { useNavigate } from "react-router-dom";
import "./home.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homescreenContainer">
      <header className="App-header">
        <div className="appInfo">
          <img src={kenzieLogo} className="kenzieLogo" alt="background Image" />
          <h2>
            Centralize o<span> controle das suas</span> finanças
          </h2>
          <h3>de forma rápida e segura</h3>
          <button
            onClick={() => {
              navigate("/profile");
            }}
          >
            Iniciar
          </button>
        </div>
      </header>
      <img src={index} className="bgImage" alt="background Image" />
    </div>
  );
}

export default HomePage;
