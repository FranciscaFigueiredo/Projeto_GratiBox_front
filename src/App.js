import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
    return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
    );
}

export default App;
