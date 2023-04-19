import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
    
          <NavBar/>
          <ItemListContainer greeting={'Bienvenidos'}/>
     
    </div>
  );
}

export default App;
