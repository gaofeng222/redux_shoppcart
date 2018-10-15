import store from './store.js';
import { addToCart }  from './action/cart-actions';
import { deleteFromCart }  from './action/cart-actions';
import { updateCart }  from './action/cart-actions';

console.log("initial state: ", store.getState());
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
store.dispatch(deleteFromCart('Coffee 500gm'));
store.dispatch(updateCart('Flour 1kg', 5, 110));

unsubscribe()
