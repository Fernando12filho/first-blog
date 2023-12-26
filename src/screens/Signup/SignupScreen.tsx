import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/Routes";

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export function SignupScreen() {
	const userRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [password, setPassword] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPassword, setMatchPassword] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState('false');

	//setting the focus when the component loads
	useEffect(() => { 
		//
	}, []);

	useEffect(() => { 
		const result = USER_REGEX.test(email);
		console.log(result);
		console.log(email);
		setValidEmail(result);
	}, [email]);

	useEffect(() => { 
		const result = PWD_REGEX.test(password);
		console.log(result);
		console.log(password);
		setValidPwd(result);
		//Comparing password with matchPassword state, returns boolean

		const match = password === matchPassword;
		setValidMatch(match);
	}, [password, matchPassword]); //Dependencies 

	useEffect(() => {
		setErrMsg('');
	}, [email, password, matchPassword]);

	const navigate = useNavigate();

	function navigateBack(){
		navigate(ROUTES.LOGIN);
	}
	
	function onChangeEmail(evt: any) {
		setEmail(evt.target.value);
	}

	function onChangePassword(evt: any) {
		setPassword(evt.target.value);
	}

	function onChangeMatchPassword(evt: any) {
		setPassword(evt.target.value);
	}

	function validateLogin(email: string, password: string) {}

	function login() {
		if (email === "" || password === "") {
			console.log("Complete all fields");
		} else {
			validateLogin(email, password);
		}
	}

	return (
		<div>
			<div className="App">
				<div className="loginContainer">
					<div className="login-structure">
						<h1>Welcome!</h1>

						<div className="input-container">
							<label htmlFor={"email"}>E-mail</label>
							<input
								name="email"
								id="email"
								type={"email"}
								onChange={onChangeEmail}
								value={email}
							/>
						</div>

						<div className="input-container">
							<label htmlFor={"password"}>Password</label>
							<input
								name="password"
								id="password"
								type={"password"}
								onChange={onChangePassword}
								value={password}
							/>
						</div>

						<div className="input-container">
							<label htmlFor={"matchPassword"}>Confirm Password</label>
							<input
								name="password"
								id="matchPassword"
								type={"password"}
								onChange={onChangeMatchPassword}
								value={matchPassword}
							/>
						</div>

						<div className="buttonsAlignment">
							<button onClick={login}>Sign Up</button>
							<button onClick = {navigateBack} > Back To Login </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
