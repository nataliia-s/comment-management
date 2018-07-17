import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class CancelBtn extends Component {

    render() {
        return (
            <button type='button' className='cancel-btn' onClick={this.props.onClick} >
                <FontAwesomeIcon className='gray-text' icon="times"/>
                <span>Cancel</span>
            </button>
        )
    }
}

export default CancelBtn;