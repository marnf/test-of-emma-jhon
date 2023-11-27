import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import"./Product.css"
import { addToDb ,addToBookmark } from '../../utilities/fakedb';

const Product = (props) => {

    const { id,name,hardLine,needTime,pictureUrl,userPictureUrl,date,hashtag}=props.product;
   
    const handleAddToCart = props.handleAddToCart;
   const saveOnBookmark = props.saveOnBookmark;

    return (
        <div className='product'>
           <div>
                 <img className='mainPic' src={pictureUrl} alt="" />
           </div>

           <div className='infoContainer'>
                 <div className='user'>
                      <div>
                          <img className='userPic' src={userPictureUrl} alt=""  /> 
                      </div>
                      <div>
                          <h4>name:{name}</h4>
                          <p>{date}</p>
                      </div>
                </div>
                <div>         
                    {needTime}min
                    <button onClick={()=>saveOnBookmark(props.product)}>   
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>
                </div>
           </div>
           
           <div className='productInfo'>           
                <h3>{hardLine}</h3>
                <p>{hashtag}</p>
                <a onClick={()=>handleAddToCart(props.product)} href="#">mark as read</a>
           </div>                    
        </div>
    );
};

export default Product;