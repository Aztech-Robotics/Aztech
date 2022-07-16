import "./App.css";
import "./App.scss"
import {Test, Test2} from "./components/Test";
import {Message} from "./components/Message";
import {ClickHandler} from "./components/ClickHandler";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">

        <p>{t("home:select_theme")}</p>



      <Test name="DUI" grupo="411"/>
      <Test2 name="Noel" grupo="411" />
      <Test name="Juanito" grupo="Ni te topo juan">
        <button>WTF bro un boton como prop?</button>
      </Test>
      <Test2 name="Camila" grupo="No m acuerdo xd">
        <h6>Otro children prop</h6>
      </Test2>
      <hr />
      <Message/>
      <hr />
      <ClickHandler/> 
    </div>
  );
}

export default App;
