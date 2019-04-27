import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store';
import "./app.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/HomePage';
import Room from './containers/RoomPage';
import TabBar from './components/TabBar';
import AppNavBar from './components/AppNavBar';
import EventForm from './components/EventForm';
import UserDetails from './components/UserDetails';

export default class App extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<BrowserRouter>
					<AppNavBar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/event/create" component={EventForm} />
							<Route exact path="/user" component={UserDetails} />
							<Route path="/event/:id" component={Room} />
						</Switch>
						<TabBar />
					</BrowserRouter>
				</Provider>
			</div>
		)
	}
}