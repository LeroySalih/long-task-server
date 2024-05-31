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
        //console.log(response);
    } catch (err) { 
        console.error("[Error! makeWebCall]::", err.message)
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

        //("callApi", data, error)
        // check if it's worth retrying
        if(error && error.code == 'ERR_BAD_REQUEST'){
            console.error("[callApi]::Error", `attempt ${attempts} made to ${uri}`);
            console.error("[callApi]::Error", error.code)
            console.error("[callApi]::Error", error.message)
            console.error(uri)
            return {data: null, error}
        }

        // assume failure is probable due to throttle, so wait 2
        // secs then reapply
        if (error){
            await sleep (2000);
        }
      }
      

      return {data, error}
}; 


export async function callFullApi(uri , token ) {

  let values = [];

  let response = await callApi(uri, token);
  //console.log("callFullApi", response);
  if (response.error) {
    return {data: response.data, error: response.error}
  } 
  
  values = values.concat(response.data.value || response.data);
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