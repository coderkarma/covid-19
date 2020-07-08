import React, { Fragment, useEffect, useState } from 'react';
import Card from './components/Card';
import Chart from './components/Chart';
import { apiEndPoint, apiDailyEndPoint } from './components/api/api';
import Loading from './components/Loading';

import 'bulma/css/bulma.css';

const App = () => {
	const [positive, setPositive] = useState(null);
	const [dailyDeaths, setDailyDeaths] = useState(null);
	const [recovered, setRecovered] = useState(null);
	const [onVentilatorCurrently, setOnVentilatorCurrently] = useState(null);

	useEffect(() => {
		const fetchAPI = () =>
			fetch(apiEndPoint)
				.then((res) => res.json())
				.then((resData) => {
					const {
						positive,
						death,
						recovered,
						onVentilatorCurrently,
					} = resData[0];

					setPositive(positive);
					setDailyDeaths(death);
					setRecovered(recovered);
					setOnVentilatorCurrently(onVentilatorCurrently);
				});
		fetchAPI();
	}, []);

	useEffect(() => {
		const fetchAPI = () =>
			fetch(apiDailyEndPoint)
				.then((res) => res.json())
				.then((resData) => {
					console.log('last one', resData[resData.length - 1]);
					resData.map((state) => {
						// if (state['state'] === 'CA') {
						// 	console.log(state);
						// }
						console.log('start date', state);
					});
				});
		fetchAPI();
	}, []);

	return (
		<Fragment>
			<h1>Covid website</h1>
			<Chart />
			{positive && dailyDeaths ? (
				<Card
					deaths={dailyDeaths}
					positive={positive}
					recovered={recovered}
					onVentilatorCurrently={onVentilatorCurrently}
				/>
			) : (
				<Loading />
			)}
		</Fragment>
	);
};

export default App;
