const postsFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Accept: "applicattion/json",
        Authorization: "meunovotoken",
    },
});