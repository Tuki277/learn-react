import React, { Component } from 'react'

class ProductsItem extends Component {
    render () {
        var { index, product } = this.props
        console.log(product)
        var statusName = product.status ? 'Con Hang' : 'Het Hang'
        var statusClass = product.status ? 'warning' : 'default'
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ product.id } </td>
                <td>{ product.name }</td>
                <td>{ product.price }</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <button type="button" className="btn btn-success">
                        Sửa
                    </button>
                    <button type="button" className="btn btn-danger">
                        xóa
                    </button>
                </td>
            </tr>
        )
    }
}

export default ProductsItem