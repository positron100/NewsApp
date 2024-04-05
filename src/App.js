import './App.css';
// rcc : ReactClassComponent
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// importing the react-router-dom features
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  // fetching apiKey from .env.local
  apiKey=process.env.REACT_APP_NEWS_API
state={
  progress:0
}
// you can use this operator only inside an arrow function
setProgress=(progress)=>
{
  this.setState({
    progress:progress
  })
}
  render() {
    return (
      <div>
        <Router>
          {/* Navbar component */}
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>

            {/* News component */}

            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" category="general" country="in" topic="Top Headlines" />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress}apiKey={this.apiKey}  key="general" category="general" country="in" topic="General" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" category="business" country="in" topic="Business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" category="entertainment" country="in" topic="Entertainment" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" category="health" country="in" topic="Health" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" category="science" country="in" topic="Science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category="sports" country="in" topic="Sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category="technology" country="in" topic="Technology" />}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}
