import './Signup.css';
import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate();
	const auth = getAuth();
	const [signUpData, setSignUpData] = React.useState({
		userEmail: '',
		userPassword: '',
	});

	function handleEmailInput(event) {
		const { name, value } = event.target;
		setSignUpData((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	function handlePasswordInput(event) {
		const { name, value } = event.target;
		setSignUpData((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	function checkData(event) {
        event.preventDefault();
        console.log(signUpData);
		createUserWithEmailAndPassword(
			auth,
			signUpData.userEmail,
			signUpData.userPassword
		).then(data => {
console.log(data)
alert('Signed Up Succesfully!')
        navigate('/')
        }).catch(err => {
            alert(err.message)
        })



        setSignUpData({
            userEmail: '',
            userPassword: '',
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
								value={signUpData.userEmail}
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
								value={signUpData.userPassword}
								className="login__input"
								placeholder="Password"
								onChange={handlePasswordInput}
							/>
						</div>
						<button onClick={checkData} className="button login__submit">
							<span className="button__text" >
								Sign Up Now
							</span>
							<i className="button__icon fas fa-chevron-right"></i>
						</button>
					</form>
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
