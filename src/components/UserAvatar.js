import React, {Component} from 'react';
import './UserAvatar.scss';

class UserAvatar extends Component {

    render() {
        return (
            <div className='pull-left user-avatar-container'>
                <img className='user-avatar rounded-border' src={this.props.src} alt='avatar'/>
            </div>
        )
    }
}

export default UserAvatar;