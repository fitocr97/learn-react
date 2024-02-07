import Button from './button.js'

function App() {
  return (
    <div>
      <h1>Hola</h1>
      <Button onClick={() => console.log('click')}>Click</Button>
    </div>
    
  );
}

export default App;