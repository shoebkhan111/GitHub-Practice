import "./App.css";

import Akram from "./Components/AKRAM/Akram";
import IrfanShah from "./Components/IRFANSHAH/IrfanShah";

import Testing from "./Components/KHWAJA/Testing";
import ShoebKhan from "./Components/SHOEBKHAN/ShoebKhan";
import Sameer from "./Components/Sameer/Sameer";
import Mukassar from "./Components/MUKASSAR/Mukassar";
import Amena from "./Components/AMENA/Amena";
import AfrozSir from "./Components/AFROZ_SIR/AfrozSir";

function App() {
  return (
    <div className="App">
      <Testing />

      <Akram/>

       <ShoebKhan/>
      <Sameer/>
      <Mukassar/>
      <IrfanShah />
      <Amena />
      <AfrozSir />

    </div>
  );
}
export default App;
