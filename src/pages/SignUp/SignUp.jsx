import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";



const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
      
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                const userInfo = {
                    name: data.name,
                    email: data.email,
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        reset();
                        toast.success("User created successfully!", {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            onClose: () =>  navigate('/')
                        });
                    }
                })
                

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
        })
    };



    return (
        <>
        <Helmet>
                <title>Sports shop | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/2 lg:ml-10">
                        <div className="-ml-24 mr-20 lg:ml-0 lg:mr-0">
                            <iframe src="https://lottie.host/embed/6ef21e65-8972-4e6c-8464-57511c6b26c7/IoKy2dT4VY.json"

                                width="393"
                                height="400"

                            >


                            </iframe>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === "required" && (
                                        <p className="text-red-600">Password is required</p>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <p className="text-red-600">Password must be six characters</p>
                                    )}

                                    {errors.password?.type === "maxLength" && (
                                        <p className="text-red-600">Password must be less then or equal to twenty characters</p>
                                    )}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                               
                            </form>
                           

                            <SocialLogin></SocialLogin>

                            <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default SignUp;