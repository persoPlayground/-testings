import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import {authentication} from '../actions'
class App extends Component {

  renderHeader(){
    return(
    <ul style={{display: 'inline'}}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/post">post</Link></li>
      <li onClick={() => this.props.authentication(!this.props.auth )}><Link to="/">{this.props.auth ? 'logout': 'login'}</Link></li>
    </ul>)
  }
  render() {
    return (
      <div className="App">
      {this.renderHeader()}
      <Route path="/post" component={CommentBox}/>
      <Route exact path="/" component={CommentList}/>
      </div>
    );
  }
}

export default connect(({auth})=>({auth}), { authentication })(App);
