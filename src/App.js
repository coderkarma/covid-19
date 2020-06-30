import React, { Fragment, useEffect, useState } from 'react';
import Cases from './components/Cases';
import Chart from './components/Chart';
import { apiEndPoint } from './components/api/api';

import 'bulma/css/bulma.css';

const App = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(apiEndPoint)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<Fragment>
			<h1>Covid website</h1>
			<Chart />
			<Cases />
		</Fragment>
	);
};

export default App;
