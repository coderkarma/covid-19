import React from 'react';
import './Home.css';
import image from '../assets/image1.jpg';

const Home = () => {
	return (
		<div className='home'>
			<div className='home__heading'>
				<h1>Protect YourSelf from Coronavrius</h1>
			</div>
			<img className='home__image' src={image} alt='covid-19-img' />
		</div>
	);
};
export default Home;
