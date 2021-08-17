import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	BarSeries,
	Title,
	ArgumentAxis,
	ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';

import './ChartBar.scss';


const ChartBar = () => {
	const getSellProd = JSON.parse(localStorage.getItem('sellProducts'))

	const data = [
		{day: 'Mon', total: 0},
		{day: 'Tue', total: 0},
		{day: 'Wed', total: 0},
		{day: 'Thu', total: 0},
		{day: 'Fri', total: 0},
		{day: 'Sat', total: 0},
		{day: 'Sun', total: 0},
	];
	getSellProd.forEach((el) => {
		data.push({day: el.saleDate, total: el.price})
	})

	return (
		<>
			<p className="graph__title">Sales Overview</p>
			<p className="graph__subtitle">Graph sales for all days</p>
			<Paper>
				<Chart
					data={data}
					height="400"
				>
					<ArgumentAxis/>
					<ValueAxis max={1000000}/>

					<BarSeries
						valueField="total"
						argumentField="day"
					/>
					<Animation/>
				</Chart>
			</Paper>
		</>
	)
}

export default ChartBar;

