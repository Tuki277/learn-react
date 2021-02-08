import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotPoundPage/NotFoundPage'
import ProductsActionPage from './pages/ProductsActionPage/ProductsActionPage'
import ProductsListPage from './pages/ProductsListPage/ProductsListPage'

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path : '/product-list',
        exact : false,
        main : () => <ProductsListPage />
    },
    {
        path : '/product/add',
        exact : false,
        main : () => <ProductsActionPage />
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main : ({ match }) => <ProductsActionPage match = { match }/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFoundPage />
    }
]

export default routes