import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <p><strong>{this.props.comment.timestamp.toString()}: </strong><br/>{this.props.comment.text}</p>
        )
    }
}

export default Comment