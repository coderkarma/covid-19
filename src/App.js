import React, { Fragment, useEffect, useState } from 'react';
import Card from './components/Card';
import Chart from './components/Chart';
import { apiEndPoint, apiDailyEndPoint } from './components/api/api';
import Loading from './components/Loading';

import 'bulma/css/bulma.css';

const App = () => {
	// const [postiveByDate, setPositiveByDate] = useState([]);
	const [positive, setPositive] = useState(null);
	const [dailyDeaths, setDailyDeaths] = useState(null);
	const [recovered, setRecovered] = useState(null);
	const [onVentilatorCurrently, setOnVentilatorCurrently] = useState(null);
	const [dailyData, setDailyData] = useState([]);

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
					//console.log('data', resData);
					//	data, death, negative, onVentilatorCurrently, recovered
					// setPositive(resData.positive);
					// setDailyDeaths(resData.death);
					// setRecovered(resData.recovered);
					// setOnVentilatorCurrently(resData.onVentilatorCurrently);
					setDailyData(resData);
					// const data = resData.map(({ date, positive }) => {
					// 	return [date, positive];
					// });
					// setPositiveByDate(data);
				});
		fetchAPI();
	},[]);

	return (
		<Fragment>
			<h1>Covid website</h1>
			<Chart dailyData={dailyData} />
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
