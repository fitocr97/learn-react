import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

/*
const root = ReactDOM.createRoot(document.getElementById('root')); //jsx
root.render('hola')*/

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
const Hola = () => <p>Hola mundo</p>  //JSX
root.render(<Hola />)
*/


/* componente Li se le pueden pasar atributos y para utilizarlos se le pasa en ({children, estado, casa, edad}) del atributo */
const root = ReactDOM.createRoot(document.getElementById('root'));
const Li = ({ children, estado, casa, edad}) => 
  <li> {children} Mora {estado}  </li>


  /* se le puede pasar atributos al componente */
const Hola = () => 
  <ul>
    <Li estado="Hola" casa="Sucre" edad="10"> Figaro</Li> 
    <Li estado="Sucre">Hola</Li>
    <Li  estado="10">Figaro</Li>
  </ul>

root.render(<Hola />)


reportWebVitals();
