import {combineReducers} from "redux";


const postReducer=(state=[], action)=>{
  if(action.type==="fetct-data"){
      return action.payload
  }
  return state;
}


const userReducer=(state=[], action)=>{
   if(action.type==="fetch_user"){
     return [state, action.payload]
   }

   return state;

}




export default combineReducers({
    posts:postReducer,
    users:userReducer
})