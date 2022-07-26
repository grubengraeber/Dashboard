const fetchData = () => {
    return fetch("localhost:8080/api/hello")
        .then((response) => response.json())
        .then((data) => console.log(data));}