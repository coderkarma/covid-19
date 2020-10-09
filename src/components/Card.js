import React, { useEffect, useState } from 'react';
import './Card.css';
// import Counter from './Counter';

const Card = ({ positive, deaths, recovered, onVentilatorCurrently }) => {
	const [counter, setCounter] = useState(positive - 150);
	const [counterDeaths, setCounterDeaths] = useState(deaths - 150);
	const [counterRecovered, setCounterRecovered] = useState(recovered - 150);
	const [counterOnVentilator, setCounterOnVentilator] = useState(
		onVentilatorCurrently - 150
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter + 1);
		});

		if (counter >= positive) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [counter, positive]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounterDeaths(counterDeaths + 1);
		}, 0.0001);

		if (counterDeaths >= deaths) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [counterDeaths, deaths]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounterRecovered(counterRecovered + 1);
		}, 0.0001);

		if (counterRecovered >= recovered) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [counterRecovered, recovered]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounterOnVentilator(counterOnVentilator + 1);
		}, 0.0001);

		if (counterOnVentilator >= onVentilatorCurrently) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [counterOnVentilator, onVentilatorCurrently]);

	return (
		<div className='card'>
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
						<p className='title'>{counterRecovered}</p>
					</div>
				</div>
				<div className='level-item has-text-centered'>
					<div>
						<p className='heading'> On Ventilator</p>
						<p className='title'>{counterOnVentilator}</p>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Card;
