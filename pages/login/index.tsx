import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSlice } from "../../pagesSaga/authSlice";
interface Data {
    userName: string
    passWord: string

}
function Login() {
    const [data, setData] = useState<Data>({
        passWord: "",
        userName: "",
    })
    const router = useRouter()
    const dispatch = useDispatch()
    const handleUserName = (e: any) => {
        setData({ ...data, userName: e.target.value })
    }
    const handlePassWord = (e: any) => {
        setData({ ...data, passWord: e.target.value })

    }
    const handleLogin = () => {
        dispatch(authSlice.actions.login(data))
        

        //  router.push("/")
    }
    return (
        <div>

            <input onChange={handleUserName} type="text" placeholder="userName" ></input>
            <input onChange={handlePassWord} type="text" placeholder="passWord" ></input>
            <button className="inline-block px-7 py-3 bg
            -blue-600 text-white font-medium text-sm leading-snug 
            uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
            focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
             transition duration-150 ease-in-out" onClick={handleLogin} > Login</button>
        </div>
    )
}

export default Login;
