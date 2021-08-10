import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	BarSeries,
	Title,
	ArgumentAxis,
	ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import './ChartBar.scss';



const ChartBar = () => {
	const getSellProd = JSON.parse(localStorage.getItem('sellProducts'))

	// const getTotalPrice = (day) => {
	// 	let total = 0;
	// 	getSellProd.reduce((prev, current) => {
	// 		if(current.saleDate === day) {
	// 			total = prev + +current.price * +current.sellQuantity
	// 			return total
	// 		}
	// 		total = prev
	// 		return total
	// 	}, 0)
	// 	return total
	// }

	const data = [
		{ day: 'Mon', total: 0 },
		{ day: 'Tue', total: 0 },
		{ day: 'Wed', total: 0 },
		{ day: 'Thu', total: 0 },
		{ day: 'Fri', total: 0 },
		{ day: 'Sat', total: 0 },
		{ day: 'Sun', total: 0 },
	];
	getSellProd.forEach((el) => {
		data.push({day: el.saleDate, total: el.price})
	})

	//
	//
	// const getMonTotal = getTotalPrice('Mon');
	// const getTueTotal = getTotalPrice('Tue');
	// const getWedTotal = getTotalPrice('Wed');
	// const getThuTotal = getTotalPrice('Thu');
	// const getFriTotal = getTotalPrice('Fri');
	// const getSatTotal = getTotalPrice('Sat');
	// const getSunTotal = getTotalPrice('Sun');

	//
	// const data = [
	// 	{ day: 'Mon', total: getMonTotal },
	// 	{ day: 'Tue', total: getTueTotal },
	// 	{ day: 'Wed', total: getWedTotal },
	// 	{ day: 'Thu', total: getThuTotal },
	// 	{ day: 'Fri', total: getFriTotal },
	// 	{ day: 'Sat', total: getSatTotal },
	// 	{ day: 'Sun', total: getSunTotal },
	// ];


	return (
		<Paper>
			<Chart
				data={data}
				height="400"
			>
				<ArgumentAxis />
				<ValueAxis max={1000000} />

				<BarSeries
					valueField="total"
					argumentField="day"
				/>
				<Animation />
			</Chart>
		</Paper>
	)
}

export default ChartBar;

