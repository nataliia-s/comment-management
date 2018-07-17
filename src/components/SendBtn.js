import React, {Component} from 'react';
import './SendBtn.scss';

class SendBtn extends Component {

    render() {
        return (
            <div className='btn-container'>
                <button type='button' className='yellow-btn rounded-border' onClick={this.props.onClick}>Send</button>
            </div>
        )
    }
}

export default SendBtn;