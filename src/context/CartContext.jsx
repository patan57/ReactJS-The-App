import React, {useState, useContext}  from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState ([]);

    const addItem = (product, quantity) => {
        if (isInCart(product.id)) {
            setCart(
                cart.map((item) => {
                    return item.id === product.id
                        ? {...item, quantity: item.quantity + quantity }
                        :item;
                }),
            );
        } else {
            setCart ([...cart, {...product, quantity}]);
        }
    };

    const totalPrice = () => {
        return cart.reduce(
            (prev,act) => prev + act.quantity*act.price, 0
        );
    };

    const totalItems = () =>
        cart.reduce(
            (acumulador, itemActual) => acumulador + itemActual.quantity, 0,);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(item => item.id ===id) ? true:false;

    const removeItem = (id) => setCart(cart.filter(item => item.id !==id));
    
    return(
        <CartContext.Provider value ={{
            addItem,
            clearCart,
            isInCart,
            removeItem,
            totalPrice,
            totalItems,
            cart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;