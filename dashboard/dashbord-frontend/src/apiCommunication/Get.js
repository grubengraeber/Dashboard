import {useState, useEffect} from "react";

export const GetData = ({url}) => {
const [data, setData] = useState({})
    useEffect((url) => {
        fetch({url})
            .then((response) => response.json())
            .then((actualData) => console.log(actualData))
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
}