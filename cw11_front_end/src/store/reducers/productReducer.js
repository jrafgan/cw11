import {
    CREATE_PRODUCT_FAILURE, FETCH_PRODUCTS_SUCCESS,
    FETCH_CATEGORIES_SUCCESS
} from "../actions/productActions";

const initialState = {
    categories: null,
    products: null,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            console.log(action.categories);
            return {...state, categories: action.categories};

        case CREATE_PRODUCT_FAILURE:
            return {...state, error: action.error};

        case FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.products};

        default:
            return state;
    }
};

export default productReducer;