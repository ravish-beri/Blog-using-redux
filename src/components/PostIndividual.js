import React from 'react';

const postindividual =(props)=>{
    
    return(
        
        <div>
            <h3>___________________________________________________</h3>
            <h1>Title:{props.Title}</h1>
            <br/>
            <h2>Category:{props.Category}</h2>
            <br/>

            <p>Author:{props.Author}  Date:{props.Date}  Vote:{props.Vote}  <button onClick={props.delete}>Delete Post</button> <button onClick={props.editPost}>Edit Post</button>
            </p>
        </div>
    )
};

export default (postindividual);