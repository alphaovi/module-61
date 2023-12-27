import { Link } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";


const Login = () => {
    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error);
            })
            form.reset();
    }

    return (
        <div className="form-container">
            <h2 className="form-title">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Type Your Email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Type Your Password" required />
                </div>
                <input className="btn-submit" type="submit" value="Login" />
            </form>
            <p><small className="signup-login-toggle">New to Ema-john? <Link to={"/signup"}>Create a new account</Link></small></p>
            <p>{error}</p>
        </div>
    );
};

export default Login;