import React from 'react';

const Card = ({ positive, deaths, recovered, onVentilatorCurrently }) => {
	return (
		<>
			<h1 className='title is-2 has-text-centered has-text-weight-medium'>
				{' '}
				Coronavirus daily updates
			</h1>
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
