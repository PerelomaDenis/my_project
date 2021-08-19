import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	PieSeries,
	Legend
} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';

import './ChartPie.scss';


const ChartLine = ({getProd}) => {
	const getChartPieData = getProd.map((prod) => {
		return {
			productName: prod.productName,
			sellQuantity: prod.sellQuantity,
		}
	}).slice(-4);


	return (
		<>
			<p className="graph__title">Sales schedule by day</p>
			<Paper>
				<Chart
					data={getChartPieData}
					width="380"
					height="200"
					rotated='true'
				>
					<PieSeries
						valueField="sellQuantity"
						argumentField="productName"
					/>
					<Legend/>
					<Animation/>
				</Chart>
			</Paper>
		</>
	)
}

export default ChartLine;

