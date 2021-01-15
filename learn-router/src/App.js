import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'
import Menu from './Components/Menu'

// custom link
{/* tách ra file cho dễ quản lý ( src/Menu ) */}

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    {/* tách ra file cho dễ quản lý ( src/Menu ) */}
                    <Menu />

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route component={NotFound} />
                    </Switch>
                    
                </div>
            </Router>

        );
    }
}

export default App;

// app là cái chính, bao bọc các components nhỏ ở bên trong