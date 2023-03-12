import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--white: #f5f5f5;
		--green: #133540;
    --lightGreen: #479c97;
		--black: #000;
    --gray: #888;
	}

  html {
    scroll-behavior: smooth;
  }

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
	}

  body {
    background-color: var(--white);
  }
`;
