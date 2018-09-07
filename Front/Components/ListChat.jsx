import React from 'react';

class ListChat extends React.Component{
    render(){
        return(
            <div>
                <div><b>{this.props.data.name}</b></div>
                <div>{this.props.data.message}</div>
                <div>{this.props.data.date}</div>
            </div>
        );
    }
}

export default ListChat;