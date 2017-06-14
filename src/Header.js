import React, { Component } from 'react';
import './Header.css'
import Navigation from './Navigation'
import Headline from './Headline'

class Header extends Component {
    render() {
        return (
            <div className="expanded row header">
                <Navigation />
                <Headline />
            </div>
        )
    }
}

export default Header