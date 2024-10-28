import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();
    return (
        <div>
            <h1>ERROR</h1>
            <h2>Error coming..</h2>
            <h3>
                {error.status}: {error.statusText}
            </h3>
        </div>)
}

export default Error;