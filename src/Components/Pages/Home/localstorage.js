const { json } = require("react-router-dom");

const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
}

const addToLs = (id) => {
    const cart = getStoredCart();
    cart.push(id);

    saveCartToLs(cart);
}

const saveCartToLs = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);


}