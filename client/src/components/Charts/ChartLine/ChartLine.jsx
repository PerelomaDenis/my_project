import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	ArgumentAxis,
	ValueAxis,
	LineSeries
} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';

import './ChartLine.scss';

const format = () => tick => tick;



const ValueLabel = (props) => {
	const {text} = props;
	return (
		<ValueAxis.Label
			{...props}
			text={`${text}%`}
		/>
	);
};

const ChartBar = ({getProd}) => {
	const getChartLineData = getProd.map((prod, index) => {
		return {
			index: index,
			productName: prod.productName,
			totalQuantity: +prod.sellQuantity,
		}
	})

	const getTotalPrice = getProd.reduce((prev, current) => {
		return prev + +current.price * +current.sellQuantity
	}, 0)

	return (
		<>
			<p className="graph__title">Total earned</p>
			<Paper>
				<Chart
					data={getChartLineData}
					height="60"
				>
					<ArgumentAxis tickFormat={format}/>
					<ValueAxis
						max={50}
						labelComponent={ValueLabel}
					/>
					<LineSeries
						valueField="totalQuantity"
						argumentField="index"
					/>
					<Animation/>
				</Chart>
			</Paper>
			<div className="chart-pie-total">${getTotalPrice}</div>
		</>
	);
}

export default ChartBar;
