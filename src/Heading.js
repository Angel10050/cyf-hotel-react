import React from 'react';
import Clock from './Clock'

const Heading = () => {
	return (
		<div>
		<header className="App-header">CYF Hotel <Clock /></header>
		<div className='header-img'>
			<img
				className="App-logo"
				src="https://static.vecteezy.com/system/resources/previews/000/223/310/large_2x/henna-vector.jpg"
				alt="Logo"
			/>
		</div>
		</div>
	);
};
export default Heading;
