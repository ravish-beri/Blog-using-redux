import React,{ Component } from 'react';
import PostIndividual from '../components/PostIndividual';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';


class ViewAllPosts extends Component 
{
    state={
        delete:false,
        reactOnly:false,
        reduxOnly:false,
        dateSort:false,
        voteSort:false
    }
    componentDidMount() 
    {
      this.props.onViewAllPosts();
    }
    deleteHandler=(id)=>
    {   
        axios.delete('/posts/'+id).then(response=>{
            console.log("Trying to delete");
            window.location.reload();
        });
        
    }
    
    react=()=>
    {
      
        this.setState({reactOnly:true});
        this.setState({reduxOnly:false});

    }
    redux=()=>
    {   
        this.setState({reactOnly:false});
        this.setState({reduxOnly:true});
    }
    dateSort1=()=>
    {
        this.setState({dateSort:true});
        this.setState({voteSort:!this.state.voteSort});
    }
    voteSort=()=>
    {
        this.setState({voteSort:true});
        this.setState({dateSort:!this.state.dateSort});
    }
    createPostHandler=()=>
    {
        
        this.props.history.push('/createPosts');
    }
    editPostHandler=(id)=>
    {
        this.props.history.push('/editPost/'+id);
    }
    
    
     render() {
     
        let posts=[];
         posts=this.props.posts.map(post=>{
           
            if(!post.deleted)
            {
            return <PostIndividual key={post.id} Id={post.id}Title={post.title} Body={post.body}Category={post.category} Author={post.author} Date={post.timestamp} Vote={post.voteScore} 
            delete={()=>this.deleteHandler(post.id)}
            editPost={()=>this.editPostHandler(post.id)} />
            }
            
        }) 
        
        if(this.state.reactOnly)
        {
             posts=posts.filter(item=>item.props.Category==='react');
        }
        if(this.state.reduxOnly)
        {
             posts=posts.filter(item=>item.props.Category==='redux');
        }
        if(this.state.dateSort)
        {
             posts=posts.sort((item1,item2)=>item1.props.Date>=item2.props.Date);
        }
        if(this.state.voteSort)
        {
             posts=posts.sort((item1,item2)=>item1.props.Vote<=item2.props.Vote);
        }

     return (
            
        <section>
                
            <div>
            <h1>Categories</h1>
            <br/>
            <a href='/'>all</a>
            <br/>
            <li onClick={this.react}>react</li>
            <br/>
            <li onClick={this.redux}>redux</li>
            <h1>______________________________________</h1>
                  
            <h1>Posts</h1>
             <button onClick={this.voteSort}>Sort By Vote</button>
             <button onClick={this.dateSort1}>Sort By Date</button>
             <button onClick={this.createPostHandler}>Create Post</button>
            </div>
            {posts}
        </section>
    );
    }
}
const mapStateToProps = state => {
    return {
        posts:state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onViewAllPosts: () =>  dispatch(actionTypes.startPost())
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllPosts);