import axios from 'axios';


export const commonAPI = async(httpMethod, url, body)=>{
    let reqConfiq = {
        method:httpMethod,
        url:url,
        data:body,
        Header:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfiq).then((result)=>{
        return result
    }) .catch((error)=>{
        return error
    })
}