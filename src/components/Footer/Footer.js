import React, { Component } from 'react';

import facebookIcon from '../../images/facebook.png';
import twitterIcon from '../../images/twitter.png';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className='container pt-3'>
					<div className='row'>
						<div className='col-lg-1'></div>
						<div className='col-lg-3'>
							<img src={twitterIcon} alt='twitter'></img>
							<img className='mx-4' src={facebookIcon} alt='facebook'></img>
						</div>
						<div className='col-lg-8 text-end'>&copy; 2021 MAKEMYTRIP PVT. LTD.</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
