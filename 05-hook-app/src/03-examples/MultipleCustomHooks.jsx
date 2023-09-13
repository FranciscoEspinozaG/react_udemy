import { DetallesUsers, LoadingFetch } from "../components";
import { useCounter, useFetch } from "../hooks";
// import { useGetObjectLenght } from "../hooks/useGetObjectLenght";

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement} = useCounter(1);

    const {data, isLoading, hasError, objectLenght} = useFetch(`https://jsonplaceholder.typicode.com/users`, `/${counter}`),
            {id, username, name, address} = !!data && data,
            {city} = !!address && address;

    return (
        <>
        <div className="container-fluid p-4 shadow">
            <h1>User: {counter}</h1>
            <sub>Total de usuarios: {objectLenght}</sub>
            {
                isLoading
                    ? <LoadingFetch/>
                    : <DetallesUsers id={id} name={name} username={username} city={city} />
            }
            <div className="d-flex flex-wrap gap-2 mt-4">
                <button
                    className="btn btn-primary rounded-pill"
                    disabled={isLoading || (counter <= 1)}
                    onClick={decrement}
                    >
                    Anterior
                </button>
                <button
                    className="btn btn-primary rounded-pill"
                    disabled={isLoading || (counter >= objectLenght)}
                    onClick={increment}
                    >
                    Siguiente
                </button>
            </div>
        </div>
        </>
    )
}