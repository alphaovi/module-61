import { Link } from "react-router-dom";
import "./SignUp.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
   const [error, setError] = useState("");

   const {createUser, verifyUser} = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target.elements;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;
       
        if(password !== confirmPass){
            setError("Your password did not match");
            return;
        }

        else if (password.length < 6) {
            setError("Password must be more then 6 character");
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast("User Created Successfully");
            verifyUser()
            .then(() => {
                toast("Please Verify Your Email");
            })

        })
        .catch(error => {
            console.log(error);
            setError(error);
        })
        form.reset();
    }
    return (
        <div className="form-container">
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Type Your Email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Type Your Password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder="Confirm Your Password" required />
                </div>
                <input className="btn-submit" type="submit" value="Sign Up" />
            </form>
            <p><small className="signup-login-toggle">Already have an account ? <Link to={"/login"}>Login</Link></small></p>
            <p className="text-error">{error}</p>
        </div>
    );
};

export default SignUp;