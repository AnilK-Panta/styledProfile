import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
body{
    background: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
}
`;
