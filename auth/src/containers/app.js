import React from 'react'
import { connect } from 'react-redux';
import User from '../components/user';
import { viewPhoto, getProfile, loadPhotos } from '../actions';


class App extends React.Component {
  render() {
      const { user, getProfile, ownProps } = this.props;
      return(
        <div>
        <header>
          <div className='fixed'>
          <div className='container'>
      <h3>Дипломная работа студента Циколенко Алексея по JavaScript курсу онлайн-университета <a target='_blank' href='https://skillbox.ru'>Skillbox</a>, 
      с использованием API <a href='https://unsplash.com/?utm_source=Diplom_Skillbox_JS&utm_medium=referral' target='_blank'><b>Unsplash</b></a></h3>
      <img src='logo.png' className='logo' width='130px' />
        <User user={user} getProfile={getProfile} />
        </div>
        </div>
          </header>
          <main>
          {this.props.children}
          </main>
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

App = connect(
mapStateToProps,
mapDispatchToProps
)(App);


export default App;