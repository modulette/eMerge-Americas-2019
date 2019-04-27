import React from 'react';
import './App.css';
import TabBar from './components/TabBar';
import AppNavBar from './components/AppNavBar';
import EventForm from './components/EventForm';
import CardList from './components/CardList';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <UserDetails user={{first: "Fulton", last: "Garcia", points: 200, img: "https://fultongarcia.com/files/corgishirt.jpg", events: ["Miami Beach Clean Up"]}}/>
      <CardList events={[{ user: "Fulton Garcia", title: "Animal Conservation Event", categories: ["Conservation"] }, { user: "Fulton Garcia", title: "Beach Clean Up Event", categories: ["Cleanup"] }, { user: "Fulton Garcia", title: "#TrashTag Competition", categories: ["Cleanup"] }]}/>
      <EventForm/>
      <TabBar />
    </div>
  );
}

export default App;
