import React, { useEffect, useState } from 'react';

const Counter = ({ positive, deaths, recovered, onVentilatorCurrently }) => {
	// const counters = [
	// 	{ label: 'deaths', num: positive },
	// 	{ label: 'asdf', num: deaths },
	// 	{ label: 'fdsa', num: recovered },
	// 	{ label: 'vcxz', num: onVentilatorCurrently },
	// ];

	// console.log('postive from counter component', positive);
	// const [counter, setCounter] = useState(1);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCounter(counter + 1);
	// 	}, 1);
	// 	if (counter >= positive) {
	// 		clearInterval(interval);
	// 	}
	// 	return () => clearInterval(interval);
	// }, [counter, positive]);

	return (
		<div>
			<h1>Counter component</h1>
		
		</div>
	);
};
export default Counter;
