import { createGlobalStyle } from "styled-components";
import { IPropsDarkMode } from "../interfaces";

const GlobalStyle = createGlobalStyle<IPropsDarkMode>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? "#141c2f" : "lightgray"};
          transition: 0.5s;
        color: white;
    }
`;

export { GlobalStyle };
