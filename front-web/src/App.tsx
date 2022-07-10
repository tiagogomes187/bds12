import Header from './components/header';
import Filter from './components/filter';
import SalesByStore from './components/sales-by-store';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <div>
          <SalesByStore />
        </div>
      </div>
    </>
  );
}

export default App;
