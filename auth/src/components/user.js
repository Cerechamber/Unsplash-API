import React from "react";

class User extends React.Component {
  render() {
    const { user, getProfile } = this.props;
       if (!user.name) {
      getProfile();
   }
   return(
      <figure>
      <div className='avatar'><img src={user.avatar} width='150px' /></div>
      <figcaption>{user.name}</figcaption>
      </figure>
      )


    }
    }


export default User;