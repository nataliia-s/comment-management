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
import UserAvatar from './../components/UserAvatar';
import './ReplyList.scss';
import {library} from "@fortawesome/fontawesome-svg-core/index";
import CommentDate from "./CommentDate";

library.add(faStroopwafel, faUser, faClock, faComment, faEdit, faTimes, faReply, fas);

class ReplyList extends Component {

    render() {

        return (
            <div className='reply-list'>
                <UserAvatar src={this.props.commentReply.author.avatar}/>
                <div className='pull-left'>
                    <span className='medium-font'>{this.props.commentReply.author.name}</span>
                    <span>
                        <FontAwesomeIcon className='gray-text' icon="reply" flip="horizontal"/>
                        <span className='gray-text'>{this.props.commentAuthor}</span>
                        <FontAwesomeIcon className='gray-text' mask={['fas', 'circle']} icon="clock"
                                         flip="horizontal"/>
                        <span className='gray-text'>
                            <CommentDate date={this.props.commentReply.created_at}/>
                        </span>
                        <p>{this.props.commentReply.content}</p>
                    </span>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}

export default ReplyList;