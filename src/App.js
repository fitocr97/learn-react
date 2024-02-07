import logo from './logo.svg';
import './App.css';
/*
const Li = ({ children}) => {
  return (
    <li className='ccs-class'> {children} </li>
  )
}

function App() {
  return (
    <ul className='ul-css'>
      <Li estado="activo"> valos de li</Li>
    </ul>
  );
}
*/

/* agregando estilos a componentes inline */
//puede ser funcion variable
const estilo = (bg) => ({
  backgroundColor: bg,
  color:  '#ffff',
  padding: '10px 15px',
  margin: '10px 15px'  
})

const Li = ({ children}) => {
  return (
    <li style={estilo('#abd')}  className='ccs-class'> {children} </li> //se llama el estilo al componente
  )
}

function App() {
  return (
    <ul style={estilo('#dba')} className='ul-css'>
      <Li estado="activo"> valos de li</Li>
    </ul>
  );
}


export default App;
