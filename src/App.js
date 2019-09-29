import React from 'react';
import Socket from './utils/socket';

import SendMessageForm from './components/SendMessageForm';
import MessageBox from './components/MessageBox';
import UsersList from './components/UsersList';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: '',
      conversations: [
        { username: 'Edwind', message: 'What you eat for Dinner ?', timestamp: 1544532325758 },
        { username: 'Liren', message: 'I ate Candle', timestamp: 1544532341078 },
        { username: 'Edwind', message: 'Really ??? Me too ~', timestamp: 1544532347412 },
        { username: 'Nicholas', message: "Gosh !!! I'm leaving this chatroom", timestamp: 1544532402998 },
      ]
    }

    Socket.emit('NEW_USER')

    Socket.on('GET_CURRENT_USER', newUser => {
      this.setState({
        currentUser: newUser.username
      })
    })

    Socket.on('RECEIVE_BROADCAST', data => {
      this.setState({
        conversations: [...this.state.conversations, data]
      })
    })
  }


  broadcastMsg = textInput => {
    const data = {
      username: this.state.currentUser,
      message: textInput,
      timestamp: Date.now()
    }

    Socket.emit('BROADCAST_MESSAGE', data)
  }


  render() {

    return (
      <div id="container">
        <div id="appTitleContainer">
          <h3 id="appTitle">
            <img src="https://cdn3.iconfinder.com/data/icons/halloween-29/64/ghost-512.png" alt="ghost" style={{ "height": "50px", "width": "50px" }} />
            Scary Chat
          </h3>
        </div>
        <div id="content">
          <UsersList />
          <div id="MsgnForm">
            <MessageBox messages={this.state.conversations} />
            <SendMessageForm broadcastMsg={this.broadcastMsg} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
