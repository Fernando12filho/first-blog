import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/Routes";

//regex code to ensure email, user and password have a pre validation, before going to database
export const EMAIL_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
export const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export function SignupScreen() {
  //Const styles used to keep track of colors, but not in use yet
  const styles = {
    disabledButton: {
      backgroundColor: "gray",
      color: "white",
      cursor: "not-allowed",
    },
    enabledButton: {
      backgroundColor: "#04aa6d",
    },
  };

  // Not in use, not sure what to do with this
  const emailRef = useRef(null);

  //Keeping track of labels to change it in case inputs are invalid
  const [emailLabel, setEmailLabel] = useState("Email");
  const [passwordLabel, setPasswordLabel] = useState("Password");
  const [matchLabel, setMatchLabel] = useState("Confirm Password");

  //seting up email, password and match password
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  //Disabling and enabling button-------------------------
  const [buttonDisable, setButton] = useState(true);
  //------------------------------------------------------

  //setting the focus when the component loads, not in use
  useEffect(() => {}, []);

  //Comparing email typed with regex code to check validation
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  //Comparing password typed with regex code to check validation, and compares the two password entered
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

  //Disables or enables the button
  useEffect(() => {
    if (validEmail && validMatch && validPwd) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [validEmail, validMatch]);

  //instantiating hook useNavigate
  const navigate = useNavigate();

  //Function that triggers button to go to a different page
  function navigateBack() {
    navigate(ROUTES.LOGIN);
  }

  //functions that keep track of inputs change
  function onChangeEmail(evt: any) {
    setEmail(evt.target.value);
  }

  function onChangePassword(evt: any) {
    setPassword(evt.target.value);
  }

  function onChangeMatchPassword(evt: any) {
    setMatchPassword(evt.target.value);
  }

  //Functions that change labels according to input validation
  function checkEmail() {
    if (validEmail || email == "") {
      setEmailLabel("Email");
      return true;
    } else {
      //turnOn span message
      setEmailLabel("Email Invalid");
      return false;
    }
  }

  function checkPassword() {
    if (validPwd || password == "") {
      setPasswordLabel("Password");
    } else {
      setPasswordLabel(" Password invalid");
    }
  }

  function checkMatch() {
    if (validMatch || matchPassword == "") {
      setMatchLabel("Confirm Password");
    } else {
      setMatchLabel("Passwords dont match");
    }
  }

  //Function not yet used, made to finish the signup, take to the home page or show pop-up with invalidations
  function signUp() {
    if (!validEmail || !validMatch) {
      console.log("Complete all fields");
    } else {
    }
  }

  function enableInst() {}

  return (
    <div>
      <div className="App">
        <div className="loginContainer">
          <div className="login-structure">
            <h1>Welcome!</h1>

            <div className="input-container">
              <label htmlFor={"email"} ref={emailRef}>
                {emailLabel}
              </label>
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
                onFocus={enableInst}
                onBlur={checkPassword}
                onChange={onChangePassword}
                value={password}
              />

              <div className="pwd-instructions">
                <p>
                  Use 8 or more characters with a mix of letter numbers &
                  symbols
                </p>
              </div>
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
              <button
                onClick={signUp}
                disabled={buttonDisable}
                style={
                  buttonDisable ? styles.disabledButton : styles.enabledButton
                }
              >
                Sign Up
              </button>
              <button onClick={navigateBack}> Back To Login </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
