import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';

const Chart = () => {
	return (
		<VictoryChart>
			{/* <VictoryLine /> */}
			<VictoryBar
				data={[
					{ x: 'Jan', y: 3, label: 'Alpha' },
					{ x: 'Feb', y: 4, label: 'Bravo' },
					{ x: 'Mar', y: 6, label: 'Charlie' },
					{ x: 'Apr', y: 3, label: 'Delta' },
					{ x: 'Jun', y: 7, label: 'Echo' },
					{ x: 'Jul', y: 7, label: 'Echo' },
					{ x: 'Aug', y: 7, label: 'Echo' },
					{ x: 'Sept', y: 7, label: 'Echo' },
					{ x: 'Oct', y: 1, label: 'Echo' },
					{ x: 'Nov', y: 7, label: 'Echo' },
					{ x: 'Dec', y: 7, label: 'Echo' },
				]}
			/>
		</VictoryChart>
	);
};
export default Chart;
