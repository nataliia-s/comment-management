import React, {Component} from 'react';
import './CommentContent.scss';
import CommentReply from "./CommentReply";
import ReplyList from "./ReplyList";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";
import ReplyBtn from "./ReplyBtn";
import CommentText from "./CommentText";
import UserMessage from "./UserMessage";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as commentsActions from "../actions";

class CommentContent extends Component {

    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
        this.showReply = this.showReply.bind(this);
        this.hideReply = this.hideReply.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.closeUpdate = this.closeUpdate.bind(this);
        this.state = {
            showReplyContent: false,
            isEditing: false
        };
    }

    deleteComment() {
        this.props.commentsActions.deleteComment(this.props.comment.id);
    }

    showReply() {
        this.setState({showReplyContent: true});
    }

    hideReply() {
        this.setState({showReplyContent: false});
    }

    updateComment() {
        this.setState({isEditing: !this.state.isEditing});
    }

    closeUpdate() {
        this.setState({isEditing: false});
    }

    render() {

        return (

            <div className='comment-content pull-left'>
                {!this.state.isEditing && <CommentText comment={this.props.comment}/>}
                {this.state.isEditing &&
                <UserMessage comment={this.props.comment.content} commentId={this.props.comment.id}
                             onSend={this.closeUpdate}/>}
                <div className='gray-text'>
                    <EditBtn onClick={this.updateComment}/>
                    <DeleteBtn onClick={this.deleteComment}/>
                    <ReplyBtn onClick={this.showReply}/>
                </div>
                {this.state.showReplyContent && <CommentReply comment={this.props.comment} hideReply={this.hideReply}/>}

                {this.props.comment.children && this.props.comment.children.map((commentReply, i) =>
                    <ReplyList key={i} commentReply={commentReply} commentAuthor={this.props.comment.author.name}/>
                )}
            </div>

        )
    }
}

CommentContent.propTypes = {
    commentsEntity: PropTypes.shape({
        id: PropTypes.number,
        context: PropTypes.string
    }),

    commentsActions: PropTypes.shape({
        deleteComment: PropTypes.func,
        updateComment: PropTypes.func
    })
};

CommentContent.defaultProps = {};

const mapDispatchToProps = (dispatch) => ({
    commentsActions: bindActionCreators(commentsActions, dispatch)
});

const mapStateToProps = state => {
    return {
        commentsEntity: state
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContent);