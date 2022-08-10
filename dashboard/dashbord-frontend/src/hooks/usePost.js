import {useEffect, useState} from "react";
import axios from "axios";

export function usePost(endpoint, dataObject) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios.post(endpoint, dataObject).then((resp) => {
            console.log("posting data", resp)
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        })
    }, [endpoint, dataObject]);

    return {loading, error}
}
