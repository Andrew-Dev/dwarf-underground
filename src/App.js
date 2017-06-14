import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Article from './Article'
import Ad from './Ad'
import Footer from './Footer'
import BottomFooter from './BottomFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
          <aside className="large-4 medium-12 columns">
            <Ad />
          </aside>
          <Footer />
          
        </main>
        
        <BottomFooter/>
      </div>
    );
  }
}

export default App;
