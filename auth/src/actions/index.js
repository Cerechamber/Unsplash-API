import Unsplash from 'unsplash-js';


 let token = '';
 const unsplash = new Unsplash({
  applicationId: "7bdedbec35b243c1d98a23c45509510d3c4cede8e1df20acd7a72bb7c7da2a59",
  secret: "ae4d4b16a21c6ac745d6d945733b6d8630a5a624b9bb2fce8acea1dff8d5db04",
  callbackUrl: "http://brutal.oblivionmachine.com/diplom/auth"
});

 const code = location.search.split('code=')[1];
 if (code) {
  unsplash.auth.userAuthentication(code)
    .then(res => res.json())
    .then(json => {
      unsplash.auth.setBearerToken(json.access_token);
      if (!json.access_token) {
        token = localStorage.getItem('token');
        unsplash.auth.setBearerToken(token);
      }
      else {
        localStorage.setItem('token', json.access_token); 
      }
      if (!json) alert('Количество запросов иссякло, приходите завтра'); 
      });
 }

 else {
  alert('Ошибка при работе с API');
 }

  

  export const viewPhoto = (url, user, user_link, date, id, likes, liked) => {
    return {
      type: 'VIEW_PHOTO',
      url: url,
      user: user,
      user_link: user_link,
      date: date,
      id: id,
      likes: likes,
      liked: liked
    }
  }


  export const reloadPhotos = (arr) => {
    return {
      type: 'RELOAD_PHOTOS',
      payload: arr
    }
  }


  export const loadPhotos = (i) => {
    return (dispatch) => {
      let arr = [];
    unsplash.photos.listPhotos(i, 10, "latest")
  .then(res => res.json())
  .then(json => {
    if (json) {
         json.forEach(item => {
    let obj = {
          url_page: item.urls.regular,
          url_popup: item.urls.full,
          user: item.user.name,
          user_link: item.user.links.html,
          date: item.created_at,
          id: item.id,
          likes: item.likes,
          liked: item.liked_by_user
    }
    arr.push(obj);
   })
       dispatch({
          type: 'LOAD_SUCCESS',
          payload: arr
        });
    }
    else {
       dispatch({
          type: 'LOAD_FAIL',
          payload: 'Количество возможных запросов к API иссякло. Попробуйте через сутки.'
        });
    }

 })
    }
  }


  export function getProfile() {
  return (dispatch) => {
    
    unsplash.currentUser.profile()
  .then(res => res.json())
  .then(json => {
    if (json) {
       dispatch({
          type: 'LOGIN_SUCCESS',
          name: json.name,
          avatar: json.profile_image.large
        });
     }
       else {
        dispatch({
          type: 'LOGIN_FAIL',
          error: '404.png',
          name: 'Ошибка авторизации'
        });
    }

      });
    }
  }


  export const likePhoto = (url, user, user_link, date, id, likes, liked) => {
    return (dispatch) => {
          unsplash.photos.likePhoto(id)
  .then(res => res.json())
  .then(json => {
    if (json) {
      console.log(json.likes);
      console.log(json.liked_by_user);
      dispatch({
      type: 'LIKE_SUCCESS',
      url: url,
      user: user,
      user_link: user_link,
      date: date,
      id: id,
      likes: json.photo.likes,
      liked: json.photo.liked_by_user
      });
}
  else {
     dispatch({
          type: 'LIKE_FAIL',
          error: 'Запросы иссякли'
        });
  }
  });

    }
  }



  export const unlikePhoto = (url, user, user_link, date, id, likes, liked) => {
    return (dispatch) => {
          unsplash.photos.unlikePhoto(id)
  .then(res => res.json())
  .then(json => {
    if (json) {
      dispatch({
      type: 'UNLIKE_SUCCESS',
      url: url,
      user: user,
      user_link: user_link,
      date: date,
      id: id,
      likes: json.photo.likes,
      liked: json.photo.liked_by_user
      });
}
  else {
     dispatch({
          type: 'UNLIKE_FAIL',
          error: 'Запросы иссякли'
        });
  }
  });
    }
  }
