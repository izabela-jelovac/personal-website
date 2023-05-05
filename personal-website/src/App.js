import "./App.css";
import Card from "./components/card.component";
import Menu from "./components/menu.component";

function App() {
  return (
    <div className="App">
      <Menu />
      <Card title={"hello world"} description={"hi"} />
      <Card title={"goodbye world"} description={"bye"} />
    </div>
  );
}

export default App;
