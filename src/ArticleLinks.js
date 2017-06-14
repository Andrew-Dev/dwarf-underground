import React, { Component } from 'react';
import Comments from './Comments'

class ArticleLinks extends Component {

    constructor() {
      super()
      this.state = {
        commentsHidden: true,
      }
    }

    showComments(event) {
      event.preventDefault()
      this.setState({ commentsHidden: !this.state.commentsHidden })
    }

    render() {
        return (
          <div>
            <div className="article-links">
              <a className="article-link" onClick={this.showComments.bind(this)}>
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
            </div>
            <div>{this.state.commentsHidden == false && <Comments/>}</div>
          </div>   
        )
    }
}

export default ArticleLinks