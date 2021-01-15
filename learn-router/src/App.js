import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to='/'>Trang chủ</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path = "/" exact  component = { Home } />
                    <Route path = "/about" component = { About } />
                </div>
            </Router>

        );
    }
}

export default App;

// app là cái chính, bao bọc các components nhỏ ở bên trong