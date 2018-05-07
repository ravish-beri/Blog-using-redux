import React, { Component } from 'react';
import './App.css';
import InputFieldPost from './components/InputFieldPost';
import ViewAllPosts from './components/ViewAllPosts';
import EditPost from './components/EditPost';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      
      <div>
      
      <Switch>
        <Route path="/" exact component={ViewAllPosts}/>
        <Route path="/createPosts" exact component={InputFieldPost}/>
        <Route path="/editPost/:id" render={(props)=><EditPost id={props.match.params.id}{...props}/>}/>
      </Switch>
      
      </div>
    );
  }
}

export default App;
