import {useState} from "react";


export const FetchData = () => {
    const [posts, setPosts] = useState("")
    let apiUrl = "http://localhost:8080/api/hello";
    fetch(apiUrl, {
        headers: {
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
        }
    })
        .then((response) => response.text())
        .then((data) => setPosts(data));
    return posts
}