import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component{

    renderComment(){
        console.log('gghguhgu', this.props.comments)
        return this.props.comments.map(comment => <li key={comment}>{comment}</li>);
    }
    render(){
        return(
            <div>
                 <h5>Comments</h5>
            <ul>
                {this.renderComment()}
            </ul>
                
            </div>
        )
    }
}

const mapStateToProps = ({comments})=>({comments});
export default connect(mapStateToProps)(CommentList);