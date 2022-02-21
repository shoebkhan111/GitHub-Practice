import "./App.css";
import IrfanShah from "./Components/IRFANSHAH/IrfanShah";
import Testing from "./Components/KHWAJA/Testing";
import Mukassar from "./Components/MUKASSAR/Mukassar";
import Amena from "./Components/AMENA/Amena";
import AfrozSir from "./Components/AFROZ_SIR/AfrozSir";

function App() {
  return (
    <div className="App">
      <Testing />
      <Mukassar/>
      <IrfanShah />
      <Amena />
      <AfrozSir />
    </div>
  );
}
export default App;
