import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/HomePage';
import Room from './containers/RoomPage';
import TabBar from './components/TabBar';
import AppNavBar from './components/AppNavBar';

export default class App extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<BrowserRouter>
					<AppNavBar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/r/:room" component={Room} />
						</Switch>
						<TabBar />
					</BrowserRouter>
				</Provider>
			</div>
		)
	}
}