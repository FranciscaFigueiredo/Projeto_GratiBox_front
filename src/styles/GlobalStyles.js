import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		text-decoration: none;
		border: none;
	}

	body {
		background-color: #6d7ce4;
		font-family: 'Roboto', sans-serif;
	}
`;
 
export default GlobalStyle;