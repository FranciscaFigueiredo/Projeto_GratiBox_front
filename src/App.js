import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import Plans from "./pages/Plans";

function App() {
    return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/login' element={<Login />} />
				<Route path='/plans' element={<Plans />} />
			</Routes>
		</BrowserRouter>
    );
}

export default App;
