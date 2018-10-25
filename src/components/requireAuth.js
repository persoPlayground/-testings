import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount(){
            this.redirectIfNotLogeedIn();
        }
        componentDidUpdate(){
            this.redirectIfNotLogeedIn();
        }
        redirectIfNotLogeedIn(){
            if(!this.props.auth){
                this.props.history.push('/')
            }
        }

        render(){
            return <ChildComponent {...this.props} />
        }
    }
    return connect(({auth})=>({auth}))(ComposedComponent);
}