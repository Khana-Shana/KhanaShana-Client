import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa';

const StarRating = (props) => {

    // const [rating,setRating] = useState(null);
    const [hover,setHover] = useState(null);
    const {rating, handleChange} = props

    return (
        <div class = "stars">
            {[...Array(5)].map((star,index) => {

               const ratingValue = index+1;

               return (
                <label>
                    <input 
                        type = "radio" 
                        name = "rating" 
                        value={ratingValue} 
                        onClick={handleChange(ratingValue)} />

                    <FaStar 
                        class = "star" 
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                        size = {40}
                        onMouseEnter={() => setHover(ratingValue)}
                        // onMouseLeave={() => setHover(null)} 
                        />
                </label>
               ); 
            })}
            
        </div>
    );
};

export default StarRating;