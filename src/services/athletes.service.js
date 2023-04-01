// import {generateURL, productsURL} from "./url";
import {getService} from "./http.service";

const getAthletesService = async () => {
    /*const params = [
        { key: 'userId', value: '1' }
    ];*/
    //const url = generateURL(productsURL, params)
    // MOCK API
    //const url = "https://run.mocky.io/v3/2cea25a0-fd86-4cd6-880d-f615c9f84405";
    //console.log("OK")
    const url = "https://64282d5946fd35eb7c4d3b4d.mockapi.io/api/v1/athletes"
    const data = getService(url)
    console.log(data)
    return data;
}

export { getAthletesService };