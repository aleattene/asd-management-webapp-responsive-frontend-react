
const getService = async (url) => {
    const api = await fetch(url);
    return await api.json();
}

export { getService }