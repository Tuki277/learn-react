import React, { Component } from 'react'
import './App.css';

class App extends Component {
    render() {

        // được phép tạo biến ở trong đây, còn ngoài render đẻ tạo các props, state
        var a = 5;
        var b = 6;
        var name = "huy 123"
        var object = {
            id : 1,
            name : 'iphone xsmax',
            price : 10000
        }

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" href="#">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <h2>
                        a : { a } <br />
                        b : { b } <br />
                        a + b = { a + b } <br />
                        {/* hiển thị giá trị của a */}
                        name : { name }
                        {/* hiển thị giá trị của name */}
                    </h2>
                    <br />
                    <h4>Hiển thị các object</h4>
                    {/* Hiển thị object */}
                    <h3>
                        id : { object.id } <br />
                        name : { object.name } <br />
                        price : { object.price }
                    </h3>

                </div>
            </div>
        );
    }
}

export default App;

// app là cái chính, bao bọc các components nhỏ ở bên trong