
const SERVER_URL = "https://jsonplaceholder.typicode.com";
const productsURL = "/posts"

const generateURL = (url, params = []) => {
    const urlServerWithoutAuth = `${SERVER_URL}${url}`;
    // const urlServerWithAuth = `${SERVER_URL}${url}${process.env.REACT_API_KEY}`;
    if (params && params.length > 0) {
        let paramsURL = new URLSearchParams();
        params.forEach(param => {
            paramsURL.append(param.key, param.value)
        })
        return urlServerWithoutAuth + `?${paramsURL.toString()}`
    }
    return urlServerWithoutAuth;
}

export {
    SERVER_URL,
    productsURL,
    generateURL
};