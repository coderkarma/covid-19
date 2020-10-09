import React, { Fragment, useEffect, useState } from 'react';
import Home from './components/Home';
import Card from './components/Card';
import Chart from './components/Chart';
import { apiEndPoint, apiDailyEndPoint } from './components/api/api';
import Loading from './components/Loading';

import 'bulma/css/bulma.css';
import './App.css';

const App = () => {
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

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	useEffect(() => {
		const fetchAPI = () =>
			fetch(proxyurl + apiDailyEndPoint)
				.then((res) => res.json())
				.then((resData) => {
					setDailyData(resData);
				})
				.then((err) => console.log(err));
		fetchAPI();
	}, []);

	return (
		<Fragment>
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
