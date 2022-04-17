import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../components/store/reducer";
import {meRequestAsync, myRequest, myRequestError, myRequestSuccess} from "../components/store/me/actions";
import {MeStateType} from "../components/store/me/reducer";


interface IUserData {
    name?: string
    iconImg?: string
}

export function useUserData() {
    // const [data, setData] = useState<IUserData>({})
    const data = useSelector<RootState, IUserData>((state) => state.me.data)
    const loading = useSelector<RootState, boolean>((state) => state.me.loading)
    console.log(data)

    const dispatch = useDispatch()
    const token = useSelector((state: RootState) => state.token)
    useEffect(() => {
        if (!token) return
         dispatch(meRequestAsync())

    }, [token])

    return {
        data,
        loading
    }

}
