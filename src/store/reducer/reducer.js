
const INITIAL_STATE={
	userName:'jai'
}


export default (states=[],action)=>{
	switch(action.type)
	{
		case 'CHANGE_USERNAME':
			return({
				...states,
				userName:action.payload
			})
		default:
			return states;
	}
}