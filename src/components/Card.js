import React, { useEffect, useState } from 'react';
import Counter from './Counter';

const Card = ({ positive, deaths, recovered, onVentilatorCurrently }) => {
	// const [counter, setCounter] = useState(0);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCounter(counter + 1);
	// 	}, 1);

	// 	if (counter >= onVentilatorCurrently) {
	// 		clearInterval(interval);
	// 	}

	// 	return () => clearInterval(interval);
	// }, [counter, onVentilatorCurrently]);

	return (
		<>
			<h2 className='title is-2 has-text-centered has-text-weight-medium'>
				Coronavirus daily updates
			</h2>
			<Counter
				positive={positive}
				deaths={deaths}
				recovere={recovered}
				onVentilatorCurrently={onVentilatorCurrently}
			/>
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
						<p className='title'>{onVentilatorCurrently}</p>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Card;
