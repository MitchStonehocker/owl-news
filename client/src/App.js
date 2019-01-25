// client/src/App.js

import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stores/store'

import Home from './components/layouts/Home'
import About from './components/layouts/About'
import Layout from './components/layouts/Layout'
// import NewsItemDetail from './components/presentation/NewsItemDetail'
import NewsArticle from './components/containers/NewsArticle'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>header</header>
        <main className='App-main'>
          <Provider store={store}>
            <BrowserRouter>
              <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route path='/news/:id' component={NewsArticle} />
              </Layout>
            </BrowserRouter>
          </Provider>
        </main>
        <footer className='App-footer'>footer</footer>
      </div>
    )
  }
}

export default App
