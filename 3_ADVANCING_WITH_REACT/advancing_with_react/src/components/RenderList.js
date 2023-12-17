import { useState } from "react";

const RenderList = () => {
  //criando uma lista usando o useState:
  const [list] = useState(["Jessica Brown", "Bob Green", "Maria Gladsom"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Maria Green", age: 33, job: "teacher" },
    { id: 2, name: "Bob Brown", age: 44, job: "homeless" },
    { id: 3, name: "john Candy", age: 79, job: "Retired" },
  ]);

  //funcao para deletar um usuario do Array users pelo Id de forma randomica:
  const deleteRandom = () => {
    //Primeiro criaremos uma variavel que sera atribuida uma funcao da biblioteca Math que randomiza de 0 a 4 para pegar numeros aleatorios:)
    const randomNumber = Math.floor(Math.random() * 4);
    /*Pegando a funcao setUsers para modificar o Array de users passando como parametro uma variavel que retorna um filtro do Array de dados users e 
    verifica se os numero do id do usuario e filtra apenas aqueles que forem diferentes do numero gerado pelo randomNumber */
    setUsers((prevUser) => {
      return prevUser.filter((user) => user.id !== randomNumber);
    });
  };
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
        {/*Criaremos um botao com evento onClick para chamar uma funcao que apaga um dado da lista de users de forma randomica: */}
        <button onClick={deleteRandom}>
          Clique aqui para apagar usuario da lista!
        </button>
      </div>
    </div>
  );
};

export default RenderList;
