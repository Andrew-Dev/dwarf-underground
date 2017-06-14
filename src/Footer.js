import React, { Component } from 'react';
import './Footer.css'
import BottomFooter from './BottomFooter'
import FooterArticle from './FooterArticle'

class Footer extends Component {

    constructor() {
        super()
        this.state = {
            articles: [
                {
                    alt: 'orc',
                    image: 'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif',
                    title: 'Single orcs in Indianapolis'
                },
                {
                    alt: 'mountain',
                    image: 'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg',
                    title: 'You won\'t believe what\'s under this mountain',
                },
                {
                    alt: 'gold',
                    image: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg',
                    title: 'Mine 20% more gold with One Weird Trick'
                },
                {
                    alt: 'hobbit',
                    image: 'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg',
                    title: 'Surprise for Indiana Hobbits born before 1999'
                },
            ],
        }
    }

    renderFooterArticle(article,i) {
        return <FooterArticle key={i} title={article.title} alt={article.alt} image={article.image} />
    }

    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                <div>
                    {this.state.articles.map(this.renderFooterArticle)}
                </div>
            </div>
        )
    }
}

export default Footer