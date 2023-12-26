import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginScreen } from "../screens/Login/LoginScreen";
import { SignupScreen } from "../screens/Signup/SignupScreen";


export const ROUTES = {
	LOGIN: "/", 
	SIGNUP: "/signup"
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
	]);

	return <RouterProvider router={router} />;
}
