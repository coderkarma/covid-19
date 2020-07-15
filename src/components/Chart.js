import React, { useState } from 'react';
import { VictoryChart, VictoryBar } from 'victory';

const Chart = ({ dailyData }) => {
	//const [data, setData] = useState([]);

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
			//Setting the right date format year month and day
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

	return (
		<VictoryChart>
			{/* <VictoryLine /> */}
			<VictoryBar
				data={result.reverse()}

				// data={[
				// 	{ x: 'Jan', y: '500' },
				// 	{ x: 'Feb', y: '1000,000' },
				// 	{ x: 'Mar', y: '500,000' },
				// 	{ x: 'Apr', y: '2,000,000' },
				// 	{ x: 'May', y: '2,500,000' },
				// 	{ x: 'Jun', y: '3,000,000' },
				// 	{ x: 'Jul', y: '3,500,000' },
				// 	{ x: 'Aug', y: '3,500,000' },
				// 	{ x: 'Sep', y: '3,500,000' },
				// 	{ x: 'Oct', y: '3,500,000' },
				// 	{ x: 'Nov', y: '3,500,000' },
				// 	{ x: 'Dec', y: '3,500,000' },
				// ]}
			/>
		</VictoryChart>
	);
};
export default Chart;
