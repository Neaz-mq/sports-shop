import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../../components/SocialLogin/SocialLogin";



const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state);



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
             // Display a toast when login is successful
             toast.success("Login successful!", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                onClose: () => navigate(from, { replace: true }),
            });
            
        })
        
        .catch((error) => {
            // Handle login failure and display an error toast if needed
            toast.error("Login failed. Please check your credentials.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
           
        });
       
};

    return (
      <>
        <Helmet>
                <title>Sports shop | Login</title>
            </Helmet>
        <div className="hero lg:min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:mr-16">
            <iframe
                        src="https://lottie.host/embed/b4378f10-d8c8-4c68-a6be-5a1aaf9f1c07/eGdhMIKpL9.json"
                        width="393" 
                        height="400" 
                    ></iframe>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        {/* Google login button */}
                   
                    <SocialLogin></SocialLogin>
                  
                    </form>
                    <p className='my-4 text-center'>New Here? Please <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer />
      </>
    );
};

export default Login;

