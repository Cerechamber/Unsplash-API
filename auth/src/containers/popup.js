import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { reloadPhotos, likePhoto, unlikePhoto } from '../actions';

class Popup extends React.Component {

	 componentWillUnmount() {
	 	const { popup, reloadPhotos, page } = this.props;

	 	let num = page.findIndex(item => {
			 			return item.id === popup.id
		});

    	page[num].liked = popup.liked;
    	page[num].likes = popup.likes;
    	reloadPhotos(page);
    }


	render(){
		const { popup, likePhoto, unlikePhoto } = this.props;
		let link = popup.user_link;
		link = link + '?utm_source=Diplom_Skillbox_JS&utm_medium=referral';
		let heart = '';
		let liked = popup.liked;
		let likes = popup.likes;

		liked ? heart = 'heart' : heart = '';

		return(
			 <div className='popup'>
			 <img src={popup.photo} className='popupimg' />
			 <div className='popup_info_container'>
			 <div className='photo_by'>Photo by</div>
			 <a href={link} target='_blank' className='author_popup'>{popup.user}</a> 
			 <div className='popup_unsplash'>on <a href='https://unsplash.com/?utm_source=Diplom_Skillbox_JS&utm_medium=referral' target='_blank'>Unsplash</a></div>
			 <div className='publish_date_popup'>{popup.date}</div>
			 <figure>
			 <img src='heart.png' id={heart} className='popup_heart' onClick={ev => {
			 	if (!heart) {
			 		ev.target.setAttribute('id', 'heart');
			 		likePhoto(popup.photo, popup.user, popup.user_link, popup.date, popup.id, likes, liked);
			 	}

			 	else {
			 		ev.target.setAttribute('id', '');
			 		unlikePhoto(popup.photo, popup.user, popup.user_link, popup.date, popup.id, likes, liked);
			 	}

			 	}} />
			 <figcaption className='popup_likes'>{popup.likes}</figcaption>
			 </figure>
			  <Link to='/'><img src='arrow.png' width='60px' className='back' /></Link>
			 </div>
			 </div>

			)
	}
}


const mapStateToProps = (store, ownProps) => {
return {
  user: store.user,
  page: store.page,
  popup: store.popup,
  ownProps
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewPhoto: (url_popup, user, user_link, date_, id, likes, liked) => dispatch(viewPhoto(url_popup, user, user_link, date_, id, likes, liked)),
    getProfile: () => dispatch(getProfile()),
    loadPhotos: (i) => dispatch(loadPhotos(i)),
    reloadPhotos: (arr) => dispatch(reloadPhotos(arr)),
     likePhoto: (url_popup, user, user_link, date_, id, likes, liked) => dispatch(likePhoto(url_popup, user, user_link, date_, id, likes, liked)),
    unlikePhoto: (url_popup, user, user_link, date_, id, likes, liked) => dispatch(unlikePhoto(url_popup, user, user_link, date_, id, likes, liked))
  }
}

Popup = connect(
mapStateToProps,
mapDispatchToProps
)(Popup);


export default Popup;