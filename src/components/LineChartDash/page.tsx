import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  '5',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',

];

export default function SimpleLineChart() {
  return (
    <LineChart
      series={[
        { data: pData, label: 'People' },
        { data: uData, label: 'Animals' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}