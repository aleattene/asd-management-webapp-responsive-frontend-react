// import {generateURL, productsURL} from "./url";
import {getService} from "../http.service";

const getEnrollmentsService = async () => {
    /*const params = [
        { key: 'userId', value: '1' }
    ];*/
    //const url = generateURL(productsURL, params)
    const url = "https://82976a2d-7e38-446c-baf2-6cbe3b7d67b2.mock.pstmn.io/api/v1/enrollments";
    return getService(url);
}

export { getEnrollmentsService };