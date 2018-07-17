import React, {Component} from 'react';
import UserAvatar from './../components/UserAvatar';
import './CommentItem.scss';
import CommentContent from "./CommentContent";

class CommentItem extends Component {

    render() {
        return (
            <div className='comment-item'>
                <UserAvatar src={this.props.comment.author.avatar}/>
                <CommentContent comment={this.props.comment}/>
                <div className="clearfix"></div>
            </div>
        )
    }
}

export default CommentItem;