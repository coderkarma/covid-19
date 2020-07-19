import React, { useEffect, useState } from 'react';

const Card = ({ positive, deaths, recovered, onVentilatorCurrently }) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter + 1);
		}, 1);

		if (
			counter >= onVentilatorCurrently ||
			counter >= positive ||
			counter >= deaths ||
			counter >= recovered
		) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [counter, positive, deaths, recovered, onVentilatorCurrently]);

	return (
		<>
			<h2 className='title is-2 has-text-centered has-text-weight-medium'>
				Coronavirus daily updates
			</h2>
			<nav className='level'>
				<div className='level-item has-text-centered'>
					<div>
						<p className='heading'>Positive</p>
						<p className='title'>{positive}</p>
					</div>
				</div>
				<div className='level-item has-text-centered'>
					<div>
						<p className='heading'>Death</p>
						<p className='title'>{deaths}</p>
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
						<p className='title'>{counter}</p>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Card;
