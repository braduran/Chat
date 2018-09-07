import React from 'react';
import axios from 'axios';
import ListChat from './ListChat.jsx';

class Chat extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {showMessage: true, messagesInfo:[]};
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(){
        var url = "http://localhost:3001/message/insertMessage";

        axios.post(url, {
            name: this.props.nickName,
            text: this.refs.inputMessage.value 
        }).then(result => {
            var messages = this.state.messagesInfo.slice();
            messages.push(result.data);
            this.setState({showMessage: false, messagesInfo: messages});
        }).catch(err => {
            console.error(err);
        });
    }
    
    render(){
        return(
            <div>
                <h1>Bienvenido {this.props.nickName}</h1>
                <div>
                    <label>Mensaje: </label><input type="text" placeholder="Escriba un mensaje" ref="inputMessage" required></input>
                    <button onClick={this.sendMessage}>Enviar</button>
                </div><br />

                <div hidden={this.state.showMessage}>
                    {this.state.messagesInfo.map((dynamicCompoenet, i)=> <ListChat key={i} data={dynamicCompoenet} />)}
                </div>
            </div>
        );
    }
}
export default Chat;
