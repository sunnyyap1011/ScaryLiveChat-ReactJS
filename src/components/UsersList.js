import React from 'react';
import Socket from '../utils/socket';

import '../App.css';


class UsersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usersList: []
        }

        Socket.on('UPDATE_USER_LIST', users => {
            const allUsers = [...users]
            this.setState({
                usersList: allUsers
            })
        })
    }


    render() {
        const { usersList } = this.state

        return (
            <div id="usersListContainer">
                <h5 id="usersListTitle">Ghost users</h5>
                <div id="usersList">
                    {
                        usersList.map(user =>
                            <div key={user.username} className="usernameList" >{user.username}</div>

                        )
                    }
                </div>
            </div>
        )
    }
}

export default UsersList