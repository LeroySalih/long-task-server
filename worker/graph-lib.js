import axios from "axios"
import {colors} from "./console-colours.js"


const sleep = async (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
} 

const makeWebCall = async (uri, options, attempt) => {

    let response = null
    let error = null

    try{
        response = await axios.get(uri, options);
    } catch (err) { 
        console.log("[Error! makeWebCall]::", err.message)
        error = {code: err.code, message: err.message}
    } finally {
        return {data: response?.data, error, attempt}
    }
}

async function callApi (uri, token) {

    let attempts  = 0;
    let data = null;
    let error = null;

    const options = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    }; 
  
      // try a uri 3 times
      while (!data && attempts < 3){
      
        
        const {data: d, error: e} = await makeWebCall(uri, options, attempts);
        data = d
        error = e
        attempts = attempts  + 1;

    
        // assume failure is probable due to throttle, so wait 5
        // secs then reapply
        if (error){
            await sleep (5000);
        }
      }
      

      return {data, error}
}; 


export async function callFullApi(uri , token ) {

  let values = [];

  let response = await callApi(uri, token);

  if (response.error) {
    return {data: response.data, error: response.error}
  } 
  
  values = values.concat(response.data.value);
  //console.log("values", values);
  while (response.data['@odata.nextLink']) {
    // console.log("nextLink detected", response['@odata.nextLink'])
    
    response = await callApi(response.data['@odata.nextLink'], token);
    
    if (response.error) {
        return {data: response.data, error: response.error}
    }
    
    // console.log("response.data.value", response.data.value)
    values = values.concat(response.data.value); 
  } 
  // console.log(response.value); 
  
  //values = values.concat(response.value);

  // console.log("values", values);
  return {data:values, error: null};
}