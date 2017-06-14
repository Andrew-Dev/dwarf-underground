import React, { Component } from 'react';

class FooterArticle extends Component {
    render() {
        return (
            <div className="small-6 medium-3 columns other-article">
                <a href="#">
                    <img src={this.props.image} alt={this.props.alt} />
                    <p>{this.props.title}</p>
                </a>  
            </div>
        )
    }
}

export default FooterArticle