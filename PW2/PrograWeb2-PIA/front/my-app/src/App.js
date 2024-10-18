import logo from './logo.svg';
import './App.css';

import MyNavbar from './componentes/navbar';
import Publicaciones from './componentes/Publicacion';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <header className="App-header">
      <Publicaciones/>

      
      </header>
    </div>
  );
}

export default App;
