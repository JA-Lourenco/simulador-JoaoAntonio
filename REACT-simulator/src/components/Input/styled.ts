import styled from "styled-components";

export const Label = styled.label`
  color: var(--black);
  margin-top: 15px;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  padding-left: 7px;

  outline: none;
  border: none;
  border-radius: 5px;

  background-color: var(--green);
  color: var(--white);

  font-size: 16px;

  ::placeholder {
    color: var(--white);
    opacity: 0.5;
  }
`;
