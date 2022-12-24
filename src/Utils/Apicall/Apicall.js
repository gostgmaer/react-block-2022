import axios from "axios";
import { notifyerror } from "../Notifications/notification";


const InvokeAPI = async (
 
  endpoint,
  type,
  body,
  headerParams,
  queryParam
  
) => {
  


  const baseURL = process.env.REACT_APP_API_UR;
  const key = process.env.REACT_APP_APIKEY;
  const option = {
    method: type,
    url: baseURL + endpoint,
    headers: { "x-api-key": `${key}` },
    params: queryParam,
    data: body,
  };
  let response;
  console.log(option);
  try {
    response = await axios.request(option);
  } catch (e) {
   
    notifyerror(e.message,5000)
    throw new Error(e.message);
  }

  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};
export default InvokeAPI;