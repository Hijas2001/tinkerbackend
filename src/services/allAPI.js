import { server } from "./serverURL";
import { commonAPI } from "./commonAPI";

export const uploadData = async(reqBody) => {
    console.log("===Upload Details");
    return await commonAPI('POST',`${server}/data`,reqBody)
}