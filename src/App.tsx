import { useState } from "react";
import "./App.css";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function onChangeEmail(evt: any) {
		setEmail(evt.target.value);
	}

	function onChangePassword(evt: any) {
		setPassword(evt.target.value);
	}

	function login() {
		console.log(email, password);
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
							type={"text"}
							onChange={onChangeEmail}
							value={email}
						/>
					</div>

					<div className="input-container">
						<label htmlFor={"password"}>Password</label>
						<input
							name="password"
							id="password"
							type={"text"}
							onChange={onChangePassword}
							value={password}
						/>
					</div>

					<div className="buttonsAlignment">
						<button onClick={login}>Log In</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
