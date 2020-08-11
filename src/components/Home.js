import React from 'react';
import image from '../assets/image1.jpg';

const style = { margin: '0 auto', display: 'flex' };

const Home = () => {
	return (
		<div>
			<h1>Protect YourSelf from Coronavrius</h1>
			<div>
				<img src={image} alt='covid-19-img' style={style} />
			</div>
		</div>
	);
};
export default Home;
