import React from 'react';
import Chat from './Chat.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {nick: '', hidden: false};
        this.saveNick = this.saveNick.bind(this);
    }

    saveNick(){
        this.setState({nick: this.refs.inputNick.value, hidden: true});
    }

    render(){
        return(
            <div>
                <div hidden={this.state.hidden}>
                    <label>Nick: </label><input type="text" placeholder="Escriba un nick" ref="inputNick" required></input>
                    <button onClick={this.saveNick}>Entrar</button>
                </div>
                
                <div hidden={!this.state.hidden}>
                    <Chat nickName={this.state.nick} />
                </div>
            </div>
        );
    }
}
export default App;
