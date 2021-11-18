import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp"

function App() {
    return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</BrowserRouter>
    );
}

export default App;
