import React, { Fragment, useEffect, useState } from 'react';
import Home from './components/Home';
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

	// console.log('recovered number is here', recovered);
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
					setDailyData(resData);
				});
		fetchAPI();
	}, []);

	return (
		<Fragment>
			<h1>Covid website</h1>
			<Home />
			{positive && dailyDeaths && recovered && onVentilatorCurrently ? (
				<Card
					deaths={dailyDeaths}
					positive={positive}
					recovered={recovered}
					onVentilatorCurrently={onVentilatorCurrently}
				/>
			) : (
				<Loading />
			)}
			<Chart dailyData={dailyData} />
		</Fragment>
	);
};

export default App;
