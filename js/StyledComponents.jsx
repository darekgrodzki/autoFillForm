import styled from 'styled-components';

export const Input = styled.input `
color: #666;
width: 300px;
background:
justify-content: center;
&:focus {
  background: red;
}
`;

export const Mydiv = styled.div `
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto;

`;

export const InputSecond = styled.input `
width: 400px;
margin-bottom: 20px;
`;
