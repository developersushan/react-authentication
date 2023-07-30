import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const [success,setSuccess] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    const Navigate = useNavigate()
    const handleLogin =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = {email, password}
        console.log(user)
        setSuccess(false)
        setPasswordError(false)
        logIn(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
            form.reset()
            setSuccess(true)
            Navigate('/')
            toast.success('successfully complete')
        })
        .catch(error =>{
            console.error(error)
            setPasswordError(true)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                {success && <p className="text-green-600">successfully complete</p> }
                                {passwordError && <p className="text-red-600">Wrong password please try again !</p> }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;