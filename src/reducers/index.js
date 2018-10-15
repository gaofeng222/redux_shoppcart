
import { combineReducers } from 'redux'

import productsReducer from './products-reducer'
import cartReducer from './cart-reducer'

const allReducers = {
    product : productsReducer,
    shoppingCart : cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer
