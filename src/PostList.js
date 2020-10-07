import React from 'react';
import fetchData from "./actions/index";
import {connect } from "react-redux";
import SingleUser from "./SingleUser.js";



class PostList extends React.Component {

    componentDidMount(){
        this.props.fetchData();
    }

    render (){
        return this.props.posts.map(post=>{
            return (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <SingleUser id={post.userId}/>
                </div>
                
            )
            
        })
    }
}

const fetchDataFromReducer=(state)=>{
   return {posts:state.posts}
}


export default  connect(fetchDataFromReducer,{fetchData})(PostList);