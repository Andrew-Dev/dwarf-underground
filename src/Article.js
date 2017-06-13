import React, { Component } from 'react';
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'
import ArticleHeading from './ArticleHeading'

class Article extends Component {
    render() {
        return (
            <div className="large-8 medium-12 columns article">
                <ArticleHeading />
                <ArticleBody />
                <ArticleLinks />
            </div>
            
        )
    }
}

export default Article