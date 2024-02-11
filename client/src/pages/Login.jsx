import { useState } from "react";
import { Link } from "react-router-dom";
import UseLogin from "../hooks/UseLogin";

const Login = () => {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const { loading, login } = UseLogin();

  const handleLogin = async(e) => {
    e.preventDefault()
    await login(username, password);
  }
  
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login 
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="label p-2">
            <span className="text-base label-text">Username</span>
            </label>
            <input 
              id="username" 
              className="w-full input input-bordered h-10 focus:outline-blue-500" 
              type="text" 
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              placeholder="Enter Username" 
            />
          </div>

          <div>
            <label htmlFor="password" className="label p-2">
            <span className="text-base label-text">Password</span>
            </label>
            <input 
              id="password" 
              className="w-full input input-bordered h-10 focus:outline-blue-500" 
              type="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter Password" 
            />
          </div>

          <Link to={'/signup'} className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block" >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-6 text-white bg-blue-600 border-transparent hover:bg-transparent hover:border-blue-600" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login