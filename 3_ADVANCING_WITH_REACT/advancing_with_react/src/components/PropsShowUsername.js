//usando o props como parametro para receber a propriedade vinda da classe pai:
const PropsShowUsername = (props) => {
  return (
    <div>
        <h1>O nome dele é: {props.name}</h1>
    </div>
  )
}

export default PropsShowUsername