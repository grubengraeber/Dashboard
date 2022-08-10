import {useGet} from "../../hooks/useGet";
import {usePost} from "../../hooks/usePost";

export const Test = props => {
    let {data, loading, error} = useGet("https://mocki.io/v1/d60e12e6-d40c-4352-97dd-8b18a7867de8")
    if (loading) return <h1>loading...</h1>;

    if (error) console.log(error);

    function useTestPost(clickEvent) {
        usePost("http://localhost:8080/test", {"test": ""})
    }

    return (
        <>
            <div>
                <h1>
                    {data ? data.test : "no data"}
                </h1>
                <button onClick={useTestPost}>Post</button>
            </div>
        </>
    );
};