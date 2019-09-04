import React from 'react';

const Footer = (props) => {
	return (
		<div className='container footer'>
			<h3>Contact Us</h3>
			<ul className='ul'>
				{props.footerInfo.map((footerInfo) => {
					return <li>{footerInfo}</li>;
				})}
			</ul>
		</div>
	);
};

export default Footer;
