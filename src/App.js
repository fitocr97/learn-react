import logo from './logo.svg';
import './App.css';

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

export default App;
