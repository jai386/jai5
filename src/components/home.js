import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeState1} from '../actions/action';

class Home extends Component{

	constructor(props){
		super(props);
		this.state={
			userName:''
		}
	}
	changeState(){
		//console.log('jaimangal');
		//changeState1();
		this.props.changeStateToReducer(this.state.userName);
		this.setState({
			userName:''
		})
	}
	changeUserInput(e){
		//console.log(e.target.value);
		this.setState({userName:e.target.value})
	}
	render(){
		return(
			<div>
				<h1>Enter Your Text {this.props.userName}</h1>
				<button onClick={this.changeState.bind(this)}>Change state</button>
				<input type="text" value={this.state.userName} onChange={this.changeUserInput.bind(this)} />
			</div>
			)
	}
}

function mapStateToProps(state){
	return({
		userName:state.rootReducer.userName
	});
}
function mapDishpatchToprops(dispatch){
	return({
		changeStateToReducer: (updateUserName)=>{
			dispatch(changeState1(updateUserName))
		}
	});
}

export default connect(mapStateToProps,mapDishpatchToprops)(Home);