import {useEffect, useState} from "react";
import axios from "axios";

export function useDelete(endpoint, dataObject) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.delete(endpoint, dataObject).then((resp) => {
            console.log("posting data", resp)
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        })
    }, [endpoint]);

    return {loading, error}
}