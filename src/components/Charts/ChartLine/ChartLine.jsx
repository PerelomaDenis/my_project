import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	ArgumentAxis,
	ValueAxis,
	LineSeries,
	Title,
	Legend,
} from '@devexpress/dx-react-chart-material-ui';
import {withStyles} from '@material-ui/core/styles';
import {Animation} from '@devexpress/dx-react-chart';

import './ChartLine.scss';

const format = () => tick => tick;
const legendStyles = () => ({
	root: {
		display: 'flex',
		margin: 'auto',
		flexDirection: 'row',
	},
});
const legendLabelStyles = theme => ({
	label: {
		paddingTop: theme.spacing(1),
		whiteSpace: 'nowrap',
	},
});
const legendItemStyles = () => ({
	item: {
		flexDirection: 'column',
	},
});

const legendRootBase = ({classes, ...restProps}) => (
	<Legend.Root {...restProps} className={classes.root}/>
);
const legendLabelBase = ({classes, ...restProps}) => (
	<Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({classes, ...restProps}) => (
	<Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, {name: 'LegendRoot'})(legendRootBase);
const Label = withStyles(legendLabelStyles, {name: 'LegendLabel'})(legendLabelBase);
const Item = withStyles(legendItemStyles, {name: 'LegendItem'})(legendItemBase);
const demoStyles = () => ({
	chart: {
		paddingRight: '20px',
	},
	title: {
		whiteSpace: 'pre',
	},
});

const ValueLabel = (props) => {
	const {text} = props;
	return (
		<ValueAxis.Label
			{...props}
			text={`${text}%`}
		/>
	);
};

const titleStyles = {
	title: {
		whiteSpace: 'pre',
	},
};
const TitleText = withStyles(titleStyles)(({classes, ...props}) => (
	<Title.Text {...props} className={classes.title}/>
));

const ChartBar = () => {
	const mock = [
		{
			year: 20, tvNews: 50,
		}, {
			year: 22, tvNews: 13,
		}, {
			year: 24, tvNews: 1,
		},
		{
			year: 26, tvNews: 3,
		},
		{
			year: 28, tvNews: 50,
		},
	]

	const getSellProd = JSON.parse(localStorage.getItem('sellProducts'))
	const getChartLineData = getSellProd.map((prod) => {
		return {
			id: prod.id,
			productName: prod.productName,
			totalQuantity: +prod.sellQuantity,
		}
	})
	
	console.log('========>getChartLineData', getChartLineData);

	const getTotalPrice = getSellProd.reduce((prev, current) => {
		return prev + +current.price * +current.sellQuantity
	}, 0)

	return (
		<>
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
						argumentField="id"
					/>
					<Animation/>
				</Chart>
			</Paper>
			<div className="chart-pie-total">${getTotalPrice}</div>
		</>
	);
}

export default ChartBar;
