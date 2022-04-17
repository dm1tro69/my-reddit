import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getToken} from "../components/store/reducer";




export function useToken() {
    const [token, setToken] = useState('')
   const dispatch = useDispatch()


    const url = new URL(window.location.href)
    const hash = url.hash.substring(url.hash.indexOf('#') + 1);
    let result = hash.split('&')
    result = result[0].split('=')
    const token_data = result[1]

    useEffect(()=> {
        if (token_data){
            setToken(token_data)
            dispatch(getToken(token_data))

        }
    }, [])

    return [token]

}
