import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginScreen } from "../screens/Login/LoginScreen";
import { SignupScreen } from "../screens/Signup/SignupScreen";

export function Routes() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <LoginScreen />,
		},
		{
			path: "/signup",
			element: <SignupScreen />,
		},
	]);

	return <RouterProvider router={router} />;
}
