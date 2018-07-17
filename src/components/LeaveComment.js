import React, {Component} from 'react';
import UserAvatar from './UserAvatar';
import UserMessage from './UserMessage';
import './LeaveComment.scss';

class LeaveComment extends Component {

    render() {

        return (
            <div className='leave-comment'>
                <p className='caption'>Leave comment</p>
                <div className='comment-block'>
                    <UserAvatar src={require('./../assets/img/avatar.png')}/>
                    <UserMessage/>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default LeaveComment;


