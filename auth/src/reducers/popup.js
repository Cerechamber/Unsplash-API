
const initialState = {};


export const viewPhotoReducer = (state = initialState, action) => {
   switch (action.type) {
   	case 'VIEW_PHOTO':
   	return {
   		photo: action.url,
   		user: action.user,
   		user_link: action.user_link,
   		date: action.date,
      id: action.id,
      likes: action.likes,
      liked: action.liked
   	}

    case 'LIKE_SUCCESS':
    console.log(action);
    return {
      photo: action.url,
      user: action.user,
      user_link: action.user_link,
      date: action.date,
      id: action.id,
      likes: action.likes,
      liked: action.liked
    }

     case 'LIKE_FAIL':
    return {
      photo: action.url,
      user: action.user,
      user_link: action.user_link,
      date: action.date,
      id: action.id,
      likes: action.error,
      liked: false
    }

    case 'UNLIKE_SUCCESS':
    console.log(action);
    return {
      photo: action.url,
      user: action.user,
      user_link: action.user_link,
      date: action.date,
      id: action.id,
      likes: action.likes,
      liked: action.liked
    }

    case 'UNLIKE_FAIL':
    return {
      photo: action.url,
      user: action.user,
      user_link: action.user_link,
      date: action.date,
      id: action.id,
      likes: action.error,
      liked: false
    }


   	default:
   	return state
   }

}


