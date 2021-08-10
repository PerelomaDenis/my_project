import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	PieSeries,
	Legend,
	Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import './ChartPie.scss';

const data = [
	{ country: 'Russia', area: 12 },
	{ country: 'Canada', area: 7 },
	{ country: 'USA', area: 7 },
	{ country: 'Others', area: 55 },
];

const ChartLine = () => {
	const getSellProd = JSON.parse(localStorage.getItem('sellProducts'))
	const getChartPieData = getSellProd.map((prod) => {
		return {
			productName: prod.productName,
			sellQuantity: prod.sellQuantity,
		}
	}).slice(-4);


	return (
		<Paper>
			<Chart
				data={getChartPieData}
				width="200"
				height="200"
				rotated='true'
			>
				<PieSeries
					valueField="sellQuantity"
					argumentField="productName"
				/>
				<Legend />
				<Animation/>
			</Chart>
		</Paper>
	)
}

export default ChartLine;

