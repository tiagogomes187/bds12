import './styles.css';
import PieChartCard from '../pie-chart-card';
import { useEffect, useState } from 'react';
import { ChartSeriesData, PieChartConfig, SalesByGender, SalesByGender2 } from '../../types';
import { makeRequest } from '../../utils/request';
import { buildChartSeries, sumSalesByGender } from './helpers';
import { buildSalesByGenderChart } from '../../helpers';
import { formatPrice } from '../../utils/formatters';

type Props = {
  filterStore?: number;
};

function SalesByStore({ filterStore }: Props) {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);
  const [salesByGender2, setSalesByGender2] = useState<PieChartConfig>();

  useEffect(() => {
    makeRequest.get<SalesByGender[]>(`/sales/by-gender?storeId=${filterStore}`).then((response) => {
      const newChartSeries = buildChartSeries(response.data);
      setChartSeries(newChartSeries);
      const newTotalSum = sumSalesByGender(response.data);
      setTotalSum(newTotalSum);
    });
  }, [filterStore]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender2[]>(`/sales/by-gender?storeId=${filterStore}`)
      .then((response) => {
        const newSalesByGender2 = buildSalesByGenderChart(response.data);
        setSalesByGender2(newSalesByGender2);
      });
  }, [filterStore]);

  return (
    <div className="sales-by-store-container base-card">
      <div className="sales-by-store-data">
        <div className="sales-by-store-quantity-container">
          <h2 className="sales-by-store-quantity">{formatPrice(totalSum)}</h2>
          <span className="sales-by-store-quantity-label">Total de vendas</span>
        </div>
      </div>

      <div>
        <PieChartCard name="" labels={salesByGender2?.labels} series={salesByGender2?.series} />
      </div>
    </div>
  );
}

export default SalesByStore;
