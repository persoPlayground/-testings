import React from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComment } from '../actions';
import requireAuth from './requireAuth'
class CommentBox extends React.Component {

state={ comment:''}

handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment)
    this.setState({ comment: ''});
}
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add comment</h4>
                <textarea
                value={this.state.comment}
                onChange={ e => this.setState({ comment: e.target.value })} />
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
             <button onClick={() => this.props.fetchComment() } >Fetch Comment</button>
             </div>
        )
    }
}

export default connect(null, { saveComment, fetchComment })(requireAuth(CommentBox));