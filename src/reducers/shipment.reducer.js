// imports

// local imports
import { FETCH_SHIPMENT_DATE, GET_TABLELINE_DATA } from "../helpers/types";

const INITIAL_STATE = {
  shipment_data: null,
  tableview_data: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SHIPMENT_DATE:
      return { ...state, shipment_data: action.payload };
    case GET_TABLELINE_DATA:
      return { ...state, tableview_data: action.payload };
    default:
      return state;
  }
};
