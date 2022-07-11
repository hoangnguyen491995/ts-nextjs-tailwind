import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSlice } from "../../pagesSaga/authSlice";
interface Data {
  userName: string;
  passWord: string;
}
function Login() {
  const [data, setData] = useState<Data>({
    passWord: "",
    userName: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const handleUserName = (e: any) => {
    setData({ ...data, userName: e.target.value });
  };
  const handlePassWord = (e: any) => {
    setData({ ...data, passWord: e.target.value });
  };
  const handleLogin = () => {
    dispatch(authSlice.actions.login(data));

    //  router.push("/")
  };
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <label
          onChange={handleUserName}
          placeholder="userName"
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <label
          onChange={handlePassWord}
          placeholder="passWord"
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p className="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <Button onClick={handleLogin} variant="contained" color="primary">
          Sign In
        </Button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

export default Login;
