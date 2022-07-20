import Header from './components/header';
import Filter from './components/filter';
import SalesByStore from './components/sales-by-store';

import './App.css';
import { useState } from 'react';

function App() {
  const [filterStore, setFilterStore] = useState<number>(0);

  const onFilterChange = (data: number) => {
    setFilterStore(data);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByStore filterStore={filterStore} />
      </div>
    </>
  );
}

export default App;
