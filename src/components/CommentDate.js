import React, {Component, Fragment} from 'react';

class CommentDate extends Component {

    render() {
        let addLeadingZero = (value) => {
            return value.toString().length < 2 ? "0" + value : value;
        };

        let date = new Date(this.props.date);

        return (
            <Fragment>
                {addLeadingZero(date.getFullYear())}-{addLeadingZero(date.getMonth() + 1)}-{date.getDate()} at {addLeadingZero(date.getHours())}:{addLeadingZero(date.getMinutes())}
            </Fragment>
        )
    }
}

export default CommentDate;