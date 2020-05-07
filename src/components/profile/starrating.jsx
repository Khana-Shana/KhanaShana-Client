/* Credit: https://www.youtube.com/watch?v=Ep78KjstQuw */

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = (props) => {

    const [hover, setHover] = useState(null);
    const { rating, handleChange } = props

    return (
        <div class="stars-feedback">
            {[...Array(5)].map((star, index) => {

                const ratingValue = index + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={handleChange(ratingValue)} />

                        <FaStar
                            class="star"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={40}
                            onMouseEnter={() => setHover(ratingValue)}
                        />
                    </label>
                );
            })}

        </div>
    );
};

export default StarRating;