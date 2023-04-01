// import {generateURL, productsURL} from "./url";
import {getService} from "../http.service";

const getTrainersService = async () => {
    /*const params = [
        { key: 'userId', value: '1' }
    ];*/
    //const url = generateURL(productsURL, params)
    // MOCK API
    //const url = "https://run.mocky.io/v3/2cea25a0-fd86-4cd6-880d-f615c9f84405";
    //console.log("OK")
    const url = "https://82976a2d-7e38-446c-baf2-6cbe3b7d67b2.mock.pstmn.io/api/v1/trainers"
    const data = getService(url)
    console.log(data)
    return data;
}

export { getTrainersService };