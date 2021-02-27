import Jacket from "./Jacket/Jacket";
import Pants from "./Pants/Pants";
import Suit from "./Suit/Suit";
import Ties from "./Ties/Ties";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="head">
        <u>Inventory</u>
      </h1>
      <Jacket startCount="4" IdealCount="20" />
      <Pants startCount="5" IdealCount="25" />
      <Suit startCount="10" IdealCount="50" />
      <Ties startCount="2" IdealCount="24" />
    </div>
  );
}

export default App;
