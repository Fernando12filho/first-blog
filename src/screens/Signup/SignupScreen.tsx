import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/Routes";
import {
  Input,
  Button,
  ButtonGroup,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

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
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //setting the focus when the component loads, not in use
  useEffect(() => {}, []);

  //Comparing email typed with regex code to check validation
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    if(result == true || email == "")
    {
      setValidEmail(true);
    }
    else{
      setValidEmail(false);
    }
  }, [email]);

  //Comparing password typed with regex code to check validation, and compares the two password entered
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    if(result == true || password == "")
    {
      setValidPwd(true);
    }
    else{
      setValidPwd(false);
    }
    console.log(result);
    console.log(password);
    
    
    //Comparing password with matchPassword state, returns boolean
    if(matchPassword == "" || password === matchPassword)
    {
      setValidMatch(true);
    }
    else{
      setValidMatch(false);
    }  
  }, [password, matchPassword]); //Dependencies

  //Disables or enables the button
  useEffect(() => {
    if (validEmail && validMatch && validPwd && email != "" && password != "" && matchPassword != "") {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [validEmail, validMatch, validPwd]);

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
    if (validEmail || email === "") {
      setEmailLabel("Email");
      return true;
    } else {
      //turnOn span message
      setEmailLabel("Email Invalid");
      return false;
    }
  }

  function checkPassword() {
    if (validPwd || password === "") {
      setPasswordLabel("Password");
    } else {
      setPasswordLabel(" Password invalid");
    }
  }

  function checkMatch() {
    if (validMatch || matchPassword === "") {
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
      setLoading(true);
      navigate(ROUTES.HOME);
    }
  }

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
              {validEmail ? (
                <Input
                placeholder="example@gmail.com"
                width="300px"
                variant="flushed"
                color=""
                name="email"
                id="email"
                type={"email"}
                onChange={onChangeEmail}
                onBlur={checkEmail}
                value={email}
              />
              ) : (
                <Input
                placeholder="Basic usage"
                width="300px"
                variant="flushed"
                color=""
                name="email"
                id="email"
                type={"email"}
                onChange={onChangeEmail}
                onBlur={checkEmail}
                value={email}
                isInvalid
                errorBorderColor="red.300"
              />
              )}
              
            </div>

            <div className="input-container">
              <label htmlFor={"password"}>{passwordLabel}</label>

              <InputGroup width="300px" variant="flushed">
                {validPwd ? (
                  <Input
                  width="300px"
                  variant="flushed"
                  name="password"
                  id="password"
                  onBlur={checkPassword}
                  onChange={onChangePassword}
                  value={password}
                  type={show ? "text" : "password"}
                />
                ) : (
                  <Input
                  width="300px"
                  variant="flushed"
                  name="password"
                  id="password"
                  onBlur={checkPassword}
                  onChange={onChangePassword}
                  value={password}
                  type={show ? "text" : "password"}
                  isInvalid
                  errorBorderColor="red.300"
                />
                )}
                
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <div className="pwd-instructions">
                <p>
                  Use 8 or more characters with a mix of letter numbers &
                  symbols
                </p>
              </div>
            </div>

            <div className="input-container">
              <label htmlFor={"matchPassword"}>{matchLabel}</label>
              {validMatch ? (
                <Input
                  width="300px"
                  variant="flushed"
                  name="matchPassword"
                  id="matchPassword"
                  type={"password"}
                  onChange={onChangeMatchPassword}
                  onBlur={checkMatch}
                  value={matchPassword}                 
                />
              ) : (
                <Input
                  width="300px"
                  variant="flushed"
                  name="matchPassword"
                  id="matchPassword"
                  type={"password"}
                  onChange={onChangeMatchPassword}
                  onBlur={checkMatch} 
                  value={matchPassword}
                  isInvalid
                  errorBorderColor="red.300"
                />
              )}
            </div>

            <div className="buttonsAlignment">
              <Button
                onClick={signUp}
                disabled={buttonDisable}
                style={
                  buttonDisable ? styles.disabledButton : styles.enabledButton
                }
              >
                Sign Up
              </Button>
              <Button onClick={navigateBack} backgroundColor="#D1FFBD">
                Back To Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
