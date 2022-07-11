import './Login.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword,  } from 'firebase/auth';

export default function Login() {
    const navigate = useNavigate()
    const auth = getAuth();
    const [loginData, setLoginData] = React.useState({
        userEmail: '',
		userPassword: '',
	});

	function handleEmailInput(event) {
		const { name, value } = event.target;
		setLoginData((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

    function handlePasswordInput(event) {
        const { name, value } = event.target;
		setLoginData((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

    function handleLogin(event) {  
       event.preventDefault()
       signInWithEmailAndPassword(auth, loginData.userEmail, loginData.userPassword)
       .then((cred) => {
console.log('logged in', cred.user)
navigate('/home')
       }).catch(err => {
        alert(err.message)
       })
     
    }
    


	return (
		<div className="container">
			<div className="screen">
				<div className="screen__content">
			<h2 className='login-title'>Dbest Note App</h2>
					<form className="login">
						<div className="login__field">
							<i className="login__icon fas fa-user"></i>
							<input
								type="text"
								name="userEmail"
								value={loginData.userEmail}
								className="login__input"
								placeholder="User name / Email"
								onChange={handleEmailInput}

							/>
						</div>
						<div className="login__field">
							<i className="login__icon fas fa-lock"></i>
							<input
								type="password"
								name="userPassword"
								value={loginData.userPassword}
								className="login__input"
								placeholder="Password"
								onChange={handlePasswordInput}
							/>
						</div>
						<button onClick={handleLogin} className="button login__submit">
							<span className="button__text" >Log In Now</span>
							<i className="button__icon fas fa-chevron-right"></i>
						</button>
					</form>
					<Link to="/signup" className="sign-up-btn">
						<h3>Sign Up</h3>
					</Link>
				</div>
				<div className="screen__background">
					<span className="screen__background__shape screen__background__shape4"></span>
					<span className="screen__background__shape screen__background__shape3"></span>
					<span className="screen__background__shape screen__background__shape2"></span>
					<span className="screen__background__shape screen__background__shape1"></span>
				</div>
			</div>
		</div>
	);
}
