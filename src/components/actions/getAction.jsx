import { GET_NUMBERS_BASKET } from './types';

export const getNumbers = () => {
    return(dispatch) => {
        dispatch({
            type: GET_NUMBERS_BASKET
        });
    }
}