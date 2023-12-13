import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function onChangeEmail(evt: any) {
		setEmail(evt.target.value);
	}

	function onChangePassword(evt: any) {
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

					<div className="buttonsAlignment">
						<button onClick={login}>Log In</button>
						<button>
							<Link to="/signup">Sign Up</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
