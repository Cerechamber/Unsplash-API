import React from "react";
import { Link } from 'react-router';


class Makelist extends React.Component {
	render(){
		const { url_page, url_popup, user, user_link, date, id, likes, liked, viewPhoto } = this.props;
		let link = user_link + '?utm_source=Diplom_Skillbox_JS&utm_medium=referral';
		let date_ = date.substring(0, 10);

		return(
			<div className='image'>
			<div className='info_page'>
			<div className='rights'>photo by <a href={link} target='_blank'>{user}</a> on <a href='https://unsplash.com/?utm_source=Diplom_Skillbox_JS&utm_medium=referral' target='_blank'>Unsplash</a></div>
			<div className='publish_date'>{date_}</div>
			<img src='heart.png' />
			<div className='likes_num'>{likes}</div>
			</div>
		<Link to='popup'><img src={url_page} className='pic_page' onClick={ev => {
			viewPhoto(url_popup, user, user_link, date_, id, likes, liked);
			localStorage.setItem('position', window.pageYOffset);
		}} /></Link>
		   </div>
			)
	}
}


export default Makelist;

 