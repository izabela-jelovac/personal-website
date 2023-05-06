import "./App.css";
import Card from "./components/card.component";
import Menu from "./components/Menu.component";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Introduction />
      <Menu />
      <Card title={"hello world"} description={"hi"} />
      <Card title={"goodbye world"} description={"bye"} />
    </div>
  );
}

export default App;
