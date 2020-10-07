import React from "react";
import { connect } from "react-redux";
import fetchUser from "./actions/fetchUser";


class SingleUser extends React.Component{

 componentDidMount(){
        this.props.fetchUser(this.props.id);
   }


  render() {
   
   const userName = this.props.user.find(user=>user.id===this.props.id)
  
  
   
  if(!userName){
    return null
  }
 
return <h1>{userName.name}</h1>
  
  }

}

const fetchUserData=(state)=>{
    return {user:state.users}
}


export default connect(fetchUserData, {fetchUser})(SingleUser);
