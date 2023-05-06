import "./App.css";
import Card from "./components/card.component";
import Menu from "./components/Menu.component";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Introduction />
      <Menu />
      <h1>Hi, I'm front-end developer. </h1>
      <Card title={"hello world"} description={"hi"} />
      <Card title={"goodbye world"} description={"bye"} />
    </div>
  );
}

export default App;
