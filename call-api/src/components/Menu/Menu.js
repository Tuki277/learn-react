import React, { Component } from 'react'

class Menu extends Component {
    render () {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">Call API</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a>Trang chu</a>
                    </li>
                    <li>
                        <a>Quan ly san pham</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu