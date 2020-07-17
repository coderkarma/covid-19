import React from 'react';
import image from '../assets/image1.jpg';

const style = { margin: '0 auto', display: 'flex' };

const Home = () => {
	return (
		<div>
			<img src={image} alt='covid-19-img' style={style} />
		</div>
	);
};
export default Home;
