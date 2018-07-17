import React, {Component, Fragment} from 'react';
import SendBtn from './SendBtn';
import './UserMessage.scss';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as commentsActions from "../actions";
import {NotificationManager} from 'react-notifications';

class UserMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: this.props.comment || ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    addComment() {
        if (!this.state.comment) {
            return NotificationManager.error('Please, enter a comment');
        }
        if (this.props.commentId) {
            this.props.commentsActions.updateComment(this.props.commentId, this.state.comment);
        } else {
            this.props.commentsActions.addComment(this.state.comment, this.props.parentId);
        }
        this.setState({comment: ''});
        if (this.props.onSend) {
            this.props.onSend();
        }
    }

    handleChange(event) {
        this.setState({comment: event.target.value});
    }

    render() {
        return (
            <Fragment>
                <div className='pull-left comment-text'>
                    <textarea placeholder='Your  Message' className='rounded-border' value={this.state.comment}
                              onChange={this.handleChange}></textarea>
                </div>
                <SendBtn onClick={this.addComment}/>
            </Fragment>
        )
    }
}

UserMessage.propTypes = {
    commentsEntity: PropTypes.shape({
        content: PropTypes.string,
        parent: PropTypes.number
    }),

    commentsActions: PropTypes.shape({
        addComment: PropTypes.func,
    })
};

UserMessage.defaultProps = {};

const mapDispatchToProps = (dispatch) => ({
    commentsActions: bindActionCreators(commentsActions, dispatch)
});

const mapStateToProps = state => {
    return {
        commentsEntity: state
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMessage);