import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class Editpost extends Component
{
    state={
        post:'',
        title:'',
        description:'',

    }
    
    componentDidMount()
    {
        
       const id=this.props.id;
       this.props.onGetPost(id);

    }
    updatePostHandler(id)
    {
       
        var data={
            title:this.state.title,
            body:this.state.description
        }
       
       this.props.onBlogUpdated(id,data);
       setTimeout(()=>{
           this.props.history.push('/')
       },200)
    }

    
    render(){
       
    return(
        <div>
            <h1>Edit Post</h1>
            Old Title:<p>{this.props.post.title}</p>
            <br/>
            Title:<input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>

            <br/>
            Old Description:<p>{this.props.post.body}</p>
            <br/>
            Description:<textarea rows="4" columns="50" type="text" value={this.state.description} onChange={(event)=>this.setState({description: event.target.value})}/>
            <br/>
            Category:<p>{this.props.post.category}</p>
            <br/>
            Author:<p>{this.props.post.author}</p>
            <br/>
            Date:<p>{this.props.post.timestamp}</p>
            <br/>
            <button onClick={()=>this.updatePostHandler(this.props.id)}>Update</button>
            
        </div>

        );
        }
};
const mapStateToProps=state=>{
    return {
        post:state.singlePost,
    };
}

const mapDispatchToProps = dispatch=>{
    return {
        onGetPost:(id)=>dispatch(actionTypes.fetchSinglePost(id)),
        onBlogUpdated:(id,data)=>dispatch(actionTypes.updateSingleBlog(id,data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Editpost);