// imports
import axios from "axios";

// local imports
import { FETCH_SHIPMENT_DATE, GET_TABLELINE_DATA } from "../helpers/types";
import { TOKEN, EMAIL } from "../helpers/constants";

export const getShipmentData = () => async dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  };
  const bodyParameters = {
    email: EMAIL
  };

  const response = await axios
    .post(
      "https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/manoj",
      bodyParameters,
      config
    )
    .catch(e => {
      console.log("We are facing some issues ", e);
    });

  let payload = {};

  if (response && response.data) {
    payload = response.data.data;
    dispatch({
      type: FETCH_SHIPMENT_DATE,
      payload
    });
  }
};

export const getTableLineData = scan => {
  return {
    type: GET_TABLELINE_DATA,
    payload: scan
  };
};
