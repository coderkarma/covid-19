import React, { Fragment, useEffect, useState } from 'react';
import Card from './components/Card';
import Chart from './components/Chart';
import { apiEndPoint } from './components/api/api';

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
				<p>Loading....</p>
			)}
		</Fragment>
	);
};

export default App;
