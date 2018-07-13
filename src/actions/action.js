export function changeState1(updateUserName){
	return dispatch=>{
		dispatch({type:'CHANGE_USERNAME',payload:updateUserName})
	}
	
}