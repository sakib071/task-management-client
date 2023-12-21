import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                alert("Login Successful")
                navigate(from, { replace: true });
                console.log(user);
            })
    }

    return (
        <div className="mx-auto mt-32">
            <div className="flex-col lg:flex-col">
                <div className="flex flex-col items-center">
                    <img className="w-12 h-12 mb-5" src="../../../../public/logo.png" alt="" />
                    <h1 className="text-4xl font-bold text-center">Login now!</h1>
                </div>
                <div className="card w-full max-w-md mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-neutral" type="submit" value="Login" />
                        </div>
                        <SocialLogin></SocialLogin>
                        <p className='font-semibold mt-6 mx-auto'>New here? <Link to="/signup" className='hover:underline'>Create an account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;