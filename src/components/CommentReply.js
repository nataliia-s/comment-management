import React, {Component, Fragment} from 'react';
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
import './CommentItem.scss';
import {library} from "@fortawesome/fontawesome-svg-core/index";
import "./CommentReply.scss";
import UserMessage from './../components/UserMessage';
import CancelBtn from "./CancelBtn";

library.add(faStroopwafel, faUser, faClock, faComment, faEdit, faTimes, faReply, fas);

class CommentReply extends Component {

    render() {

        return (
            <Fragment>
                <div className='gray-text reply-active'>
                    <div className='pull-left'>
                        <FontAwesomeIcon icon="reply" flip="horizontal"/>
                        <span>{this.props.comment.author.name}</span>
                    </div>
                    <div className='pull-right'>
                        <CancelBtn onClick={this.props.hideReply}/>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <UserMessage parentId={this.props.comment.id} onSend={this.props.hideReply}/>
            </Fragment>
        )
    }
}

export default CommentReply;