import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ManageData from "./components/ManageData";
import PropsShowUsername from "./components/PropsShowUsername";
import RenderList from "./components/RenderList";


function App() {
//criando uma variavel javaScript e atribuindo o valor nela para chamar no template expresson de PropsShowUsername:
//const name="Joaquim"

//criando um usestate e atribuindo o valor nele para chamar no template expression do PropsShowUsername:
const [userName] = useState("João")
 
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
        <ConditionalRender />
        {/**Vamos passar uma propriedade chamada name que recebe um valor */}
        <PropsShowUsername name={userName} /> 
      </div>
    </div>
  );
}

export default App;
