import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Timeline} from 'react-twitter-widgets';

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }

        return (
            <div>
                <div className="Twitt">
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: this.props.user.description
                        }}
                        options={{
                            username: this.props.user.description,
                            height: '600',
                            theme: 'dark'
                        }}
                    />
                </div>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
