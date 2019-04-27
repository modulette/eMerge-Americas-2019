import React, { Component } from 'react'
import CardList from '../components/CardList';
import API from "../utils/API";

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
  
  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res => {
        this.setState({ events: res.data})
      }
      )
      .catch(err => {
        console.log(err)
      });
  };

  render(){
    return (
      <div>
        <h1 style={{textAlign:"center",paddingTop:"20px", color:"#222323"}}>Live events</h1>
      <CardList events={this.state.events}/>
      </div>
    );
  }
}


export default HomePage;