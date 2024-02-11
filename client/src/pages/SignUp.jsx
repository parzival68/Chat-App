import { Link } from "react-router-dom"
import { useState } from "react"; 
import { GenderCheckbox } from "../components/index.js"
import useSignup from "../hooks/UseSignup.js";

const SignUp = () => {

  const [input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
      setInput({...input, gender})
  }

  const handleSignUp = async(e) => {
    e.preventDefault();
    await signup(input);
  }

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up 
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="fullname" className="label p-2">
            <span className="text-base label-text">Full Name</span>
            </label>
            <input 
              id="fullname" 
              className="w-full input input-bordered h-10 focus:outline-blue-500" 
              type="text" value={input.fullName} 
              onChange={(e) => setInput({...input, fullName: e.target.value})} 
              placeholder="John Doe" 
            />
          </div>

          <div>
            <label htmlFor="username" className="label p-2">
            <span className="text-base label-text">Username</span>
            </label>
            <input 
              id="username" 
              className="w-full input input-bordered h-10 focus:outline-blue-500" 
              type="text" 
              value={input.username} 
              onChange={(e) => setInput({...input, username: e.target.value})} 
              placeholder="johndoe" 
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
              value={input.password} 
              onChange={(e) => setInput({...input, password: e.target.value})} 
              placeholder="Enter Password" 
            />
          </div>

          <div>
            <label htmlFor="confirmpassword" className="label p-2">
            <span className="text-base label-text">Confirm Password</span>
            </label>
            <input 
              id="confirmpassword" 
              className="w-full input input-bordered h-10 focus:outline-blue-500" 
              type="password" value={input.confirmPassword} 
              onChange={(e) => setInput({...input, confirmPassword: e.target.value})} 
              placeholder="Confirm Password" />
          </div>

          {/* GENDER CHECKBOX HERE */}
          <GenderCheckbox selectedGender={input.gender} onCheckboxChange= {handleCheckboxChange} />

          <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-6 text-white bg-blue-600 border-transparent hover:bg-transparent hover:border-blue-600" disabled={loading}>
              { loading ? <span className="loading loading-spinner"></span> : "Sign Up" }
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default SignUp