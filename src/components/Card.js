import React, { useEffect, useState } from 'react';
// import Counter from './Counter';

const Card = ({ positive, deaths, recovered, onVentilatorCurrently }) => {
	const [counter, setCounter] = useState(positive - 150);
	const [counterDeaths, setCounterDeaths] = useState(deaths - 150);
	// const [counterRecovered, setCounterRecovered] = useState(recovered);
	const [counterOnVentilator, setCounterOnVentilator] = useState(
		onVentilatorCurrently
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter + 1);
		}, 1);

		if (counter >= positive) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [counter, positive]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounterDeaths(counterDeaths + 1);
		}, 1);

		if (counterDeaths >= deaths) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [counterDeaths, deaths]);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCounterRecovered(counterRecovered + 1);
	// 	}, 1);

	// 	if (counterRecovered >= recovered) {
	// 		clearInterval(interval);
	// 	}

	// 	return () => clearInterval(interval);
	// }, [counterRecovered, recovered]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounterOnVentilator(counterOnVentilator + 1);
		}, 1);

		if (counterOnVentilator >= onVentilatorCurrently) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [counterOnVentilator, onVentilatorCurrently]);

	return (
		<>
			<h2 className='title is-2 has-text-centered has-text-weight-medium'>
				Coronavirus daily updates
			</h2>

			<nav className='level'>
				<div className='level-item has-text-centered'>
					<div>
						<p className='heading'>Positive</p>
						<p className='title'>{counter}</p>
					</div>
				</div>
				<div className='level-item has-text-centered'>
					<div>
						<p className='heading'>Death</p>
						<p className='title'>{counterDeaths}</p>
					</div>
				</div>
				<div className='level-item has-text-centered'>
					<div>
						<p className='heading'>Recovered</p>
						<p className='title'>{recovered}</p>
					</div>
				</div>
				<div className='level-item has-text-centered'>
					<div>
						<p className='heading'> On Ventilator</p>
						<p className='title'>{counterOnVentilator}</p>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Card;
