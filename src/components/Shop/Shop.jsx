import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart ,addToBookmark, getBookmark } from '../../utilities/fakedb';


const Shop = () => {

    const [products, setProducts] = useState([]);
    

    const [cart, setCart] =useState([])

    const [mark, setMark] =useState([])

    useEffect(()=>{

        fetch('products.json')
        .then (res => res.json())
        .then(data => setProducts(data))

    },[])


    useEffect (()=>{

        const storedCart = getShoppingCart()
         
        const savedCart =[];

        for(const id in storedCart){
             const savedItem = products.find(product => product.id === id);
             
             if(savedItem){
                const newQuantity = storedCart[id];
                savedItem.quantity = newQuantity;
                savedCart.push(savedItem)
             }
        }

        setCart(savedCart)
    },[products])


    useEffect (()=>{

        const storedCart = getBookmark()
         
        const savedCart =[];

        for(const id in storedCart){
             const savedItem = products.find(product => product.id === id);
             
             if(savedItem){
                const newQuantity = storedCart[id];
                savedItem.quantity = newQuantity;
                savedCart.push(savedItem)
             }
        }

        setMark(savedCart)
    },[products])

    const handleAddToCart =(product) =>{
        let newCart =[];

        const exists = cart.find(pd => pd.id === product.id);

        if(!exists){
            product.quantity = 1;
            newCart =[...cart, product]
        } 

        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart =[ ...remaining, exists]
        }

        setCart ( newCart);
        addToDb(product.id)
        

        
    }


    const saveOnBookmark = (item)=>{

        let newMark =[];

        const exists = mark.find(mk => mk.id === item.id);

        if(!exists){
            item.quantity = 1;
            newMark =[...mark, item]
        } 

        else{
            exists.quantity = exists.quantity + 1;
            const remaining = mark.filter(mk => mk.id !== item.id);
            newMark =[ ...remaining, exists]
        }

        setMark ( newMark);
        addToBookmark(item.id)
        

        
    }

    return (
             <div className='shop-container'>


                <div className="products-container">
                    {
                       products.map(product => 
                       <Product
                        product ={product}
                        key ={product.id}
                        handleAddToCart = {handleAddToCart}
                        saveOnBookmark = {saveOnBookmark}
                       >
                       </Product>)
                    }
                </div>

           
                <div className="cart-container">
                    
                {
                 <Cart
                 cart= {cart}
                 mark = {mark}
                 ></Cart>
                }

                </div>
        </div>
     
    );
};

export default Shop;


                   