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
import {library} from "@fortawesome/fontawesome-svg-core/index";
import CommentDate from "./CommentDate";

library.add(faStroopwafel, faUser, faClock, faComment, faEdit, faTimes, faReply, fas);


class CommentText extends Component {

    constructor(props) {
        super(props);


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {

        console.log(this.props);


        return (
            <Fragment>
                <div>
                    <span className='medium-font'>{this.props.comment.author.name}</span>
                    <FontAwesomeIcon className='gray-text' mask={['fas', 'circle']} icon="clock"
                                     flip="horizontal"/>
                    <span className='gray-text'>
                        <CommentDate date={this.props.comment.created_at}/>
                    </span>
                </div>
                <p>{this.props.comment.content}</p>
            </Fragment>
        )
    }
}

export default CommentText;