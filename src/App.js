import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import { PlanContext } from "./contexts/PlanContext";
import Subscribe from "./pages/Subscribe";
import Shipping from "./pages/Shipping";

function App() {
	const [name, setName] = useState('');
	const [email, setLogin] = useState('');
	const [token, setToken] = useState('');
	const [address, setAddress] = useState({});

	const [plan, setPlan] = useState({});
	const [subscribe, setSubscribe] = useState({});
    console.log(subscribe)
	console.log(address)
    return (
		<BrowserRouter>
			<UserContext.Provider value={{ name, setName, email, setLogin, token, setToken, address, setAddress }} >
				<PlanContext.Provider value={{ plan, setPlan, subscribe, setSubscribe }} >
					<GlobalStyle />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/sign-up' element={<SignUp />} />
						<Route path='/login' element={<Login />} />
						<Route path='/plans' element={<Plans />} />
						<Route path='/subscribe' element={<Subscribe />} />
						<Route path='/address' element={<Shipping />} />
					</Routes>
				</PlanContext.Provider>
			</UserContext.Provider>
		</BrowserRouter>
    );
}

export default App;
