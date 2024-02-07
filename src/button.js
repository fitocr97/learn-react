import './button.css'

const arreglo = [ 
    "hola 1",
    "hola 2",
    "hola 3",
]

//componente buttom
const Button = (props) => {
    const variable = false //atributo que puede venir props
    if (variable) {
        <h1>hola esto es otro componente</h1>
    } else {
        return (
             //map devuelve otro arreglo, el elemento , key id, aqui es el porque es unico
            <div>
                
                {arreglo.map(el => <p key={el}> {el} </p> )}
                
                <button {...props} className="btn"></button> 
            </div>
        )
    }
    
}

export default Button