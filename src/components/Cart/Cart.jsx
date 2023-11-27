import React from 'react';
import "./Cart.css"

const Cart = (props) => {

    const {cart,mark}=props;
    
    let showTime = 0;
    
    for(const item of cart){
       showTime = showTime + item.needTime;
       
    }

    let test =[];

    for(const item of mark){
        test.push(item)
    }


    return (
        <div className='cartContainer'>
           <header>
            <h3>spend time on read: {showTime} time</h3>
           </header>
           <main>
                <h3>bookmark bologs</h3>               
                <div>
                    <p>{}</p>
                </div>

           </main>
        </div>
    );
};

export default Cart;