import React, { Component } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductItem from '../../components/ProductsItem/ProductsItem'
import { connect } from 'react-redux'
import axios from 'axios'

class ProductsListPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products : []
        }
    }

    componentDidMount(){
        axios({
            method : 'GET',
            url : 'http://localhost:3000/products',
            data : null
        }).then(res => {
            console.log(res)
            this.setState({
                products : res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    showProducts = (products) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return(
                    <ProductItem 
                        key={index}
                        index={index} //lay ra so thu tu
                        product={product}
                    />
                )
            })
        }
        return result
    }

    render () {
        // var { products } = this.props
        var { products } = this.state
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-info">
                    Thêm sản phẩm
                </button>
                <ProductsList>
                    { this.showProducts(products) }
                </ProductsList>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps, null)(ProductsListPage)