import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
                console.log(result.user);
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