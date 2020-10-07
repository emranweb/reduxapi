import axios from "axios";


const fetchUser = (id)=>{

    return async function (dispatch){
    
      const response= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

      dispatch({type:"fetch_user", payload: response.data})
    }
    
}


export default fetchUser;