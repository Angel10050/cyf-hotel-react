import React from 'react';

const Footer = (props) => {
	return (
		<div>
			<h3>Contact Us</h3>
			<ul>
				{props.footerInfo.map((footerInfo) => {
					return <li>{footerInfo}</li>;
				})}
			</ul>
		</div>
	);
};

export default Footer;
