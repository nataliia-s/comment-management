import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faStroopwafel,
    faUser,
    faClock,
    faComment,
    faEdit,
    faTimes,
    faReply,
    fas
} from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core/index";

library.add(faStroopwafel, faUser, faClock, faComment, faEdit, faTimes, faReply, fas);


class ReplyBtn extends Component {

    render() {
        return (
            <button type='button' className='comment-btn gray-text' onClick={this.props.onClick}>
                <FontAwesomeIcon className='gray-text' icon="reply"/>
                <span>Reply</span>
            </button>
        )
    }
}

export default ReplyBtn;