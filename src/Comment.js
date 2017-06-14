import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <p><strong>Comment: </strong><br/>{this.props.comment}</p>
        )
    }
}

export default Comment