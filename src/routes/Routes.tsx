import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginScreen } from "../screens/Login/LoginScreen";
import { SignupScreen } from "../screens/Signup/SignupScreen";
import { Home } from "../screens/Home/Home";


export const ROUTES = {
	LOGIN: "/", 
	SIGNUP: "/signup",
	HOME: "/home"
}


export function Routes() {

	const router = createBrowserRouter([
		{
			path: ROUTES.LOGIN,
			element: <LoginScreen />,
		},
		{
			path: ROUTES.SIGNUP,
			element: <SignupScreen />,
		},
		{
			path: ROUTES.HOME, 
			element: <Home />
		},
	]);

	return <RouterProvider router={router} />;
}
