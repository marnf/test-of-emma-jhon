// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const addToBookmark = id => {
    let bookmarkCart = getBookmark();
    // add quantity
    const quantity = bookmarkCart[id];
    if (!quantity) {
        bookmarkCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        bookmarkCart[id] = newQuantity;
    }
    localStorage.setItem('bookmark-cart', JSON.stringify(bookmarkCart));



}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const getBookmark = () => {
    let BookmarkCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('bookmark-cart');
    if (storedCart) {
        BookmarkCart = JSON.parse(storedCart);
    }
    return BookmarkCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart,
    addToBookmark,
    getBookmark
}
