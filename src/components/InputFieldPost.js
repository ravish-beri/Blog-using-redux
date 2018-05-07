import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';


class Inputfieldpost extends Component 
{
    state={
        
        title:'',
        category:'react',
        author:'',
        description:'',
        
    }
    postDataHandler=(event)=>
      {
        
        var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0!

                var yyyy = today.getFullYear();
                if(dd<10){
                    dd='0'+dd;
                } 
                if(mm<10){
                    mm='0'+mm;
                } 
                today = mm+'/'+dd+'/'+yyyy;
                

        var a= Math.floor(Math.random() * Math.floor(1000000000));
                
        const post={
            id:a,
            title:this.state.title,
            category:this.state.category,
            author:this.state.author,
            timestamp: today
            
        }
        
        this.props.onCreatePost(post);
        setTimeout (()=>{
            this.props.history.push('/')
        },200)

    }
    render() {
        
    return (
        
        <div>
        <h1>Create Post </h1>
        
            
        Title:<input type="text" onChange={(event)=>this.setState({title:event.target.value})}/>
        <br/>
        Category:
        <select  value={this.state.category} onChange={(event)=>this.setState({category:event.target.value})} >
        <option value="react">react</option>
        <option value="redux">redux</option>
        </select>
        <br/>
        
        Description:<textarea onChange={(event)=>this.setState({description:event.target.value})}/>
        <br/>
        Author:<input type="text" onChange={(event)=> this.setState({author:event.target.value})}/>
        <br/>
        <button onClick={this.postDataHandler}>Submit</button>
        
        
        <h2>___________________________________________________</h2>
        </div>
    );
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        
        onCreatePost:(data)=>dispatch(actionTypes.newPost(data))
    }
}

export default connect(null,mapDispatchToProps)(Inputfieldpost);