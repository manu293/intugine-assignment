// imports

// local imports
import { FETCH_SHIPMENT_DATE } from '../helpers/types';


const INITIAL_STATE = {
    shipment_data: null,
};
  

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
    case FETCH_SHIPMENT_DATE:
    return { ...state, ...action.payload };
    default:
    return state;
}
};