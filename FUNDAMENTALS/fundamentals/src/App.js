//components:
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";
import MyComponent from "./components/MyComponent";
import Event from "./components/Event";

//CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Event />
    </div>
  );
}

export default App;
