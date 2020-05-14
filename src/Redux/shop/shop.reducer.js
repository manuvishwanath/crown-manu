import SHOP_DATA from './Shop-Data';

const INITAL_STATE = { collections: SHOP_DATA }

const shopReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;