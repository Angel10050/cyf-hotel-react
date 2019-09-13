import React, {Component} from 'react';
import Button from './button';

const buttonDisplay = 'Search IDs';

class Search extends Component {
	constructor(){
		super()
		this.state = {
			searchInput : ""
		}
		
	}
	submit = (event)=>{
		event.preventDefault()
		this.props.search(this.state.searchInput)
	}
	
	handleSearchInput = (event) =>{
		this.setState({
			searchInput : event.target.value
		})
	}
	
	render(){
		return (
		<div className="search">
			<div className="page-header">
				<h4 className="text-left">Search Bookings</h4>
			</div>
			<div className="row search-wrapper">
				<div className="col">
					<form className="form-group search-box" onSubmit={this.submit}>
						<label htmlFor="customerName">Customer name</label>
						<div className="search-row">
							<input type="text" value={this.state.searchInput} onChange={this.handleSearchInput} id="customerName" className="form-control" placeholder="Search By Name" />
							<Button buttonLabel={buttonDisplay} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
	}
	
};

export default Search;
