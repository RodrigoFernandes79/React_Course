import { useState } from "react";

const RenderList = () => {
  //criando uma lista usando o useState:
  const [list] = useState(["Jessica Brown", "Bob Green", "Maria Gladsom"]);
  return (
    <div>
      <ol>
        {/*Renderizando a lista e fazendo um map para pegar cada elemento da lista e colocar ela na tag <li>*/}
        {list.map((item) => (
            <li>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default RenderList;
