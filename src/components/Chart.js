import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';
import uscovid from '../assets/US-covid.png';

const Chart = ({ dailyData }) => {
	const months = {
		'01': 'Jan',
		'02': 'Feb',
		'03': 'Mar',
		'04': 'Apr',
		'05': 'May',
		'06': 'Jun',
		'07': 'Jul',
		'08': 'Aug',
		'09': 'Sep',
		'10': 'Oct',
		'11': 'Nov',
		'12': 'Dec',
	};
	const chartData = dailyData
		.map((item) => {
			const [year, month, day] = String(item.date)
				.match(/(\d{4})(\d{2})(\d{2})/)
				.slice(1, 4);
			return { year, month: months[month], day, death: item.death };
		})
		.reduce((acc, val) => {
			if (val.month in acc) {
				acc[val.month] += val.death;
			} else {
				acc[val.month] = val.death;
			}
			return acc;
		}, {});
	console.log('chartdata  *********', chartData);
	const arrVersion = Object.entries(chartData);

	console.log('array version ****', arrVersion);
	const result = arrVersion.map((item) => {
		return { x: item[0], y: item[1] };
	});
	console.log('result 🇦🇩', result);

	const chartWrapperStyles = {
		display: 'flex',
	};

	const padding = { top: 30, bottom: 40, left: 100, right: 100 };

	return (
		<div
			style={chartWrapperStyles}
			className='columns is-mobile  is-desktop'>
			<div className='column'>
				<img src={uscovid} alt='covid' />
			</div>
			<div className='column'>
				<VictoryChart padding={padding}>
					<VictoryBar
						data={result.reverse()}
						style={{
							data: { fill: 'tomato', width: 12 },
							height: 300,
						}}
						animate={{
							onExit: {
								duration: 500,
								before: () => ({
									_y: 0,
									fill: 'orange',
									label: 'BYE',
								}),
							},
						}}
					/>
				</VictoryChart>
			</div>
		</div>
	);
};
export default Chart;
