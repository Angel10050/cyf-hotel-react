import React, {Component} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";



class Bookings extends Component{
  constructor(){
    super()
    this.state ={
      infoFromJson : [],
      isLoading : true,
      error : null
    }
  }

  componentDidMount(){
    fetch('https://cyf-react.glitch.me')
    .then((resError) => {
      if (resError.status >= 200 && resError.status < 300) {
        return resError;
      } else {
        throw new Error('HTTP error');
      }
    })
    .then(res => res.json())
    .then(info => this.setState({
      infoFromJson : info,
      isLoading : false
    }))
    .catch(statusError => {
      this.setState({
        isLoading : false,
        error : statusError
      })
    })
  }

 search = (searchVal) => {
  let filtring = this.state.infoFromJson.filter(name => searchVal === name.firstName)
  this.setState({
    infoFromJson : filtring,
  })
};
    
  render(){
    if(this.state.isLoading){
      return <span className='tryAgain'>Loading ...stay</span>
    }
    else if (this.state.error){
      return <span className='tryAgain'>Something went wrong</span>
    }
    return (
    <div className="App-content">
      <div className="container">
        <Search search={this.search} />
        <SearchResults FakeBookings={this.state.infoFromJson} />
      </div>
    </div>
  );
  }
};

export default Bookings;
