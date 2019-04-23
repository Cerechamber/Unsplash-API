
const initialState = {
  name: '',
  avatar: ''
}


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
  	case 'LOGIN_SUCCESS':
  	return {
  		name: action.name,
  		avatar: action.avatar
  	}

    case 'LOGIN_FAIL':
    return {
      name: action.name,
      avatar: action.error
    }



 default: 
  return state;

  }
}