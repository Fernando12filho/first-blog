import "./App.css";
import Button from "./components/button/Button";
import Input from "./components/input/Input";




function App() {
  return (
    <div className="App">
      <form>
        <div className="loginContainer">
          <div className="login-structure">

            <h1>Welcome!</h1>
            <Input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              title="E-mail"
            />
            <Input
              type="password"
              name="password"
              placeholder="12346578"
              title="Password"
            />

            <div className="buttonsAlignment">
              <Button label = "Log In" />
              <Button label = "Sign Up"/> 
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
