import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li>

                                {/* Sử dụng NavLink */}

                                {/* <Link to='/'>Trang chủ</Link> */}

                                {/* sử dụng activeStyle */}
                                {/* <NavLink exact activeStyle = {{ color : 'white' }} to='/'>Trang chủ</NavLink> */}

                                {/* sử dụng activeClass */}
                                <NavLink activeClassName="active" to='/'>Trang chủ</NavLink>
                            </li>
                            <li>

                                {/* <Link to='/about'>About</Link> */}
                                <NavLink activeClassName="active" to='/about'>About</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>

        );
    }
}

export default App;

// app là cái chính, bao bọc các components nhỏ ở bên trong