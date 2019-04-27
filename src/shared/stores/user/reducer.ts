import { combineReducers } from 'redux';

const authenticationState = {
	username:'',
	password:''
}



export default combineReducers({
	user: (state = authenticationState, action) => {
		switch (action.type) {
			default:
				return state
		}
	},
	
});
