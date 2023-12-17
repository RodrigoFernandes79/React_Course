import "./App.css";
import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import RenderList from "./components/RenderList";

function App() {
  return (
    <div className="App">
      <h1>SECAO 3</h1>
      <div>
        {/*Publicando imagens da pasta public. o caminho da imagem eh /img1.jpg*/}
        <img src="/img1.jpg" alt="Paisagem.jpg" />
      </div>
      <div>
        {/*Publicando imagem da pasta assets, criamos uma pasta chamada assets dentro de src e demos um import City from "x./assets/city.jpg" */}
        <img src={City} alt="Cidade.jpg" />
      </div>
      <div>
        <ManageData />
        <RenderList />
      </div>
    </div>
  );
}

export default App;
