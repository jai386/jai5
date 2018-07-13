import React, {Component} from 'react';
import {connect} from 'react-redux';


class About extends Component{
	render(){
		return(
			<div>
				<h1> {this.props.userName}</h1>
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

	});
}

export default connect(mapStateToProps,mapDishpatchToprops)(About);