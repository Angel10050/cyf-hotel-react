import React from 'react';

const TouristInfoCards = (props) => {
	return (
		<div className="card">
			<img src={props.image} className="card-img-top" alt={props.altContent} />
			<h3>{props.cityName}</h3>
			<p>{props.shortTextAbout}</p>
			<div className="card-body">
				<a href={props.website} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default TouristInfoCards;
