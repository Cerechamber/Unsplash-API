
const initialState = [];

export const pageReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
      case 'RELOAD_PHOTOS':
      return action.payload;

      case 'LOAD_SUCCESS':
      newState = newState.concat(action.payload);
      return newState;

      case 'LOAD_FAIL':
      alert(action.payload);
      return newState;
      
            
       default: 
  return state;
  }
}