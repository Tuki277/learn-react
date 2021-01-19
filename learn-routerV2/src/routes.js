import React, { Component } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'
import Products from './Components/Products'
import ProductsDetail from './Components/ProductsDetail'

const router = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : false,
        main : () => <About />
    },
    {
        path : '/products',
        exact : false,
        // match để bắt được từng id của sản phẩm
        main : ({match}) => <Products match={match}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
]

export default router