import './App.css';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer title={"Productos Destacados"}/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
