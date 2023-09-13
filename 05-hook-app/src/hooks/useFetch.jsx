import { useEffect, useState } from "react";

export const useFetch = (baseApi, consultaApi = '') => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const [objectLenght, setObjectLenght] = useState(0);

    const getLenght = async()=>{
        const resp = await fetch(`${baseApi}`);
        const data = await resp.json();
        const objLengt = Object.keys(data).length;
        
        setObjectLenght(objLengt);
    }

    const getFetch = async()=>{

        setState({
            ...state,
            isLoading :true
        });

        const resp = await fetch(`${baseApi}${consultaApi}`),
            data = await resp.json();
        // console.log(data)


        setState({
            data,
            isLoading: false,
            hasError: null

        });

    }

    useEffect(() => {
        getFetch();
        getLenght();
    }, [consultaApi]);
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        objectLenght
    };
}