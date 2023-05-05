import "./App.css";
import Card from "./components/card.component";

function App() {
  return (
    <div className="App">
      <Card title={"hello world"} description={"hi"} />
      <Card title={"goodbye world"} description={"bye"} />
    </div>
  );
}

export default App;
