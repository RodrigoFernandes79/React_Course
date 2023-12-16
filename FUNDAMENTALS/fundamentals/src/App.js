//components:
import Challenge from "./components/Challenge";
import Event from "./components/Event";
import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";
import TemplateExpression from "./components/TemplateExpression";

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
      <Challenge />
    </div>
  );
}

export default App;
