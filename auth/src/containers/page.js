import React from "react";
import { connect } from 'react-redux';
import { viewPhoto, loadPhotos } from '../actions';
import Makelist from '../components/makelist';

let i = 1;
let check = true;

class Page extends React.Component {
	 constructor(props) {
    super(props);
    this.loadbyScroll = this.loadbyScroll.bind(this);
  }

  loadbyScroll() {
  	const { loadPhotos } = this.props;
  	let scrolled = window.pageYOffset;
      localStorage.setItem('position', scrolled);
        if (scrolled + window.innerHeight >= document.body.clientHeight - 1) {
			++i;
		loadPhotos(i);
	}
}

    componentDidMount() {
        window.addEventListener('scroll', this.loadbyScroll);
        window.scrollTo(0, localStorage.getItem('position'));
    }

    componentWillUnmount() {
    	window.removeEventListener('scroll', this.loadbyScroll);
    }


	render(){
		const { page, viewPhoto, loadPhotos } = this.props;

   
		if ((page.length === 0) && check) {
			loadPhotos(i);
		}
		check = false;
    window.scrollTo(0, localStorage.getItem('position'));

		 const list = page.map((item, i) => {
      return(
        <Makelist key={i} url_page={item.url_page} url_popup={item.url_popup} user={item.user} user_link={item.user_link}
         date={item.date} id={item.id} likes={item.likes} viewPhoto={viewPhoto} liked={item.liked} />
        )
    });
           
		return(
			<div className='center container'>
			<div className='shadow'>
			{list}
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
    reloadPhotos: (arr) => dispatch(reloadPhotos(arr))
  }
}

Page = connect(
mapStateToProps,
mapDispatchToProps
)(Page);


export default Page;