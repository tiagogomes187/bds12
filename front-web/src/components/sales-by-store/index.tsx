import './styles.css';
import PieChartCard from '../pie-chart-card';

function SalesByStore() {
  return (
    <div className="sales-by-store-container base-card">
      <div className="sales-by-store-data">
        <div className="sales-by-store-quantity-container">
          <h2 className="sales-by-store-quantity">R$ 746.484,00</h2>
          <span className="sales-by-store-quantity-label">Total de vendas</span>
        </div>
      </div>

      <div>
        <PieChartCard
          name={''}
          labels={['Feminino', 'Masculino', 'Outros']}
          series={[40, 30, 30]}
        />
      </div>
    </div>
  );
}

export default SalesByStore;
