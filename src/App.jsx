import productData from './data/full-products';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <Header />
      <CardList data={productData}/>
    </div>
  );
}

export default App;
