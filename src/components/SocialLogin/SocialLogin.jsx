import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName

                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data);
                    navigate('/');
                })
        })
    }
    return (
        <div>
             {/* Google login button */}
             <div className="form-control mt-4">
                <button
                    className="btn btn-google"
                    onClick={handleGoogleSignIn}
                >
                    <FaGoogle className="text-xl mr-2 text-red-600" />
                    Sign up with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;