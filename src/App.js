import "./App.css";
import Background from "./components/Background";
import ListNote from "./components/ListNote";
import Input from "./components/Input";

const App = () => {
  return (
    <div className="app">
      <Background>
        <h1>what's the plan for today?</h1>
        <Input />
        <ListNote />
      </Background>
    </div>
  );
};

export default App;
