import React from 'react';
import Heading from './Heading';
import Bookings from './Bookings';
import TuristInfoCards from './TouristInfoCards';
import Footer from './Footer';
import './App.css';

const australiaCity = {
	image:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gold_Coast_skyline.jpg/1024px-Gold_Coast_skyline.jpg',
	altContent: 'australiaImage',
	cityName: 'Australia',
	shortTextAbout: 'The big island in the world, full of amazing animal',
	website: 'visitmanchester.com'
};
const baliCity = {
	image:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Tanah-Lot_Bali_Indonesia_Pura-Tanah-Lot-01.jpg/1024px-Tanah-Lot_Bali_Indonesia_Pura-Tanah-Lot-01.jpg',
	altContent: 'baliImage',
	cityName: 'Bali',
	shortTextAbout: 'A beautiful city full of peace, love and spirituality',
	website: 'peoplemakeglasgow.com'
};
const guatemalaCity = {
	image:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Tikal_mayan_ruins_2009.jpg/1024px-Tikal_mayan_ruins_2009.jpg',
	altContent: 'GuateImage',
	cityName: 'Guatemala',
	shortTextAbout: 'A legendy culture was and is part of this country',
	website: 'visitlondon.com'
};

const arrOfInfo = [ '123 Fake Street, London, E1 4UD', 'hello@fakehotel.com', '0123 456789' ];

const App = () => {
	return (
		<div className="App">
			<Heading />
			<div className="card-columns container-fluid ">
				<TuristInfoCards
					image={australiaCity.image}
					altContent={australiaCity.altContent}
					cityName={australiaCity.cityName}
					shortTextAbout={australiaCity.shortTextAbout}
					website={australiaCity.website}
				/>
				<TuristInfoCards
					image={baliCity.image}
					altContent={baliCity.altContent}
					cityName={baliCity.cityName}
					shortTextAbout={baliCity.shortTextAbout}
					website={baliCity.website}
				/>
				<TuristInfoCards
					image={guatemalaCity.image}
					altContent={guatemalaCity.altContent}
					cityName={guatemalaCity.cityName}
					shortTextAbout={guatemalaCity.shortTextAbout}
					website={guatemalaCity.website}
				/>
			</div>
			<Bookings />
			<Footer footerInfo={arrOfInfo} />
		</div>
	);
};

export default App;
