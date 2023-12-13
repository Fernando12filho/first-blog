import {
	BrowserRouter,
	Route,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Signup from "../components/signup/signup";
import { LoginScreen } from "../screens/Login/LoginScreen";

export function Routes() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <LoginScreen />,
		},
		{
			path: "/signup",
			element: <Signup />,
		},
	]);

	return <RouterProvider router={router} />;
}
