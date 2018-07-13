import React, {Component} from 'react';
import {Router,Route} from 'react-router-dom';
import Home from '../components/home';
import About from '../components/about';
import history from './history'
//import createBrowserHistory from 'history/createBrowserHistory';

//const history= createBrowserHistory()

class Routers extends Component{
	render(){
		return(
				<Router history={history}>
					<div>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
					</div>
				</Router>	
			)
	}
}
export default Routers;