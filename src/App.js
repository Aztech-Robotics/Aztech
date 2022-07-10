import "./App.css";
import {Test, Test2} from "./components/Test";
import {Message} from "./components/Message";
import {ClickHandler} from "./components/ClickHandler"
function App() {
  return (
    <div className="App">
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
