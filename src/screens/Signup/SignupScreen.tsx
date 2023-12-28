import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/Routes";

export const EMAIL_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
export const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export function SignupScreen() {

	const styles = {
		disabledButton: {
			backgroundColor: 'gray',
			color: 'white',
			cursor: 'not-allowed',
		},
		enabledButton: {
			backgroundColor: '#04aa6d',			
		},
	};

	

	const emailRef = useRef(null);

	const [emailLabel, setEmailLabel] = useState("Email");
	const [passwordLabel, setPasswordLabel] = useState("Password");
	const [matchLabel, setMatchLabel] = useState("Confirm Password");


	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);


	const [password, setPassword] = useState("");
	const [validPwd, setValidPwd] = useState(false);

	const [matchPassword, setMatchPassword] = useState("");
	const [validMatch, setValidMatch] = useState(false);

	const [buttonDisable, setButton] = useState(true);


	//setting the focus when the component loads
	useEffect(() => {

	}, []);

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
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
		console.log(match);
		setValidMatch(match);
	}, [password, matchPassword]); //Dependencies 



	useEffect(() => {
		if(validEmail && validMatch && validPwd){
			setButton(false);
		}
		else{
			setButton(true);
		}
	}, [validEmail, validMatch]);


	
	const navigate = useNavigate();
	function navigateBack() {
		navigate(ROUTES.LOGIN);
	}



	function onChangeEmail(evt: any) {
		setEmail(evt.target.value);
	}

	function onChangePassword(evt: any) {
		setPassword(evt.target.value);
	}

	function onChangeMatchPassword(evt: any) {
		setMatchPassword(evt.target.value);
	}



	function checkEmail(){
		if (validEmail) {
			setEmailLabel("Email");
			return(true)
		} else {
			//turnOn span message 
			setEmailLabel("Email Invalid");
			return(false)
		}
	}

	function checkPassword() {
		if (validPwd) {
			setPasswordLabel("Password");
		}
		else {
			setPasswordLabel(" Password invalid")
		}
	}

	function checkMatch() {
		if (validMatch) {
			setMatchLabel("Confirm Password");
		}
		else {
			setMatchLabel("Passwords dont match")
		}
	}

	function signUp() {
		if (!validEmail || !validMatch) {
			console.log("Complete all fields");
		} else {

		}
	}



	return (
		<div>
			<div className="App">
				<div className="loginContainer">
					<div className="login-structure">
						<h1>Welcome!</h1>

						<div className="input-container">
							<label htmlFor={"email"} ref={emailRef}>{emailLabel}</label>
							<input
								name="email"
								id="email"
								type={"email"}
								onChange={onChangeEmail}
								onBlur={checkEmail}
								value={email}
							/>
						</div>

						<div className="input-container">
							<label htmlFor={"password"}>{passwordLabel}</label>
							<input
								name="password"
								id="password"
								type={"password"}
								onBlur={checkPassword}
								onChange={onChangePassword}
								value={password}
							/>

						</div>

						<div className="input-container">
							<label htmlFor={"matchPassword"}>{matchLabel}</label>
							<input
								name="matchPassword"
								id="matchPassword"
								type={"password"}
								onChange={onChangeMatchPassword}
								onBlur={checkMatch}
								value={matchPassword}
							/>
						</div>

						<div className="buttonsAlignment">
							<button onClick={signUp} disabled = {buttonDisable} style={buttonDisable?
                    styles.disabledButton : styles.enabledButton}>
								Sign Up
							</button>
							<button onClick={navigateBack} > Back To Login </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);



}
