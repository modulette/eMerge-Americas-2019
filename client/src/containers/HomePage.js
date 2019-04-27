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
      <CardList events={this.state.events}/>
    );
  }
}


export default HomePage;