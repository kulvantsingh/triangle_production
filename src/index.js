import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { AuthContextProvider } from './context/auth_context'

ReactDOM.render(
    <AuthContextProvider>
    <ProductsProvider>
    <FilterProvider>
    <App />
    </FilterProvider>
    </ProductsProvider>
    </AuthContextProvider>, document.getElementById('root'))
