import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/HomePage'
import Room from './containers/RoomPage'
import styles from './app.css'

export default class App extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<BrowserRouter>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/r/:room" component={Room} />
						</Switch>
					</BrowserRouter>
				</Provider>
			</div>
		)
	}
}
