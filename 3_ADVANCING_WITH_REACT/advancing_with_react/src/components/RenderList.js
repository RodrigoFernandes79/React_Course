import { useState } from "react";

const RenderList = () => {
  //criando uma lista usando o useState:
  const [list] = useState(["Jessica Brown", "Bob Green", "Maria Gladsom"]);

  const [users] = useState([
    { id: 1, name: "Maria Green", age: 33, job: "teacher" },
    { id: 2, name: "Bob Brown", age: 44, job: "homeless" },
    { id: 3, name: "john Candy", age: 79, job: "Retired" },
  ]);
  return (
    <div>
      <div>
        <ol>
          {/*Renderizando a lista e fazendo um map para pegar cada elemento da lista e colocar ela na tag <li>
        Precisamos passar um parametro id e inseri lo em uma propriedade key*/}
          {list.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ol>
      </div>
      <div>
        <ol>
          {/*Vamos fazer um map de users e dentro da tag <li> informamos a chave unica do nosso array*/}
          {users.map((item) => (
            <li key={item.id}>
              Name: {item.name}, Age: {item.age}, Job: {item.job}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RenderList;
