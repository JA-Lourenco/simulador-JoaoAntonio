import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  width: 125px;
  height: 55px;

  background-color: var(--white);
  color: var(--green);

  border: 2px solid var(--green);
  border-radius: 5px;

  font-size: 18px;
  font-weight: 700;

  &:hover {
    background-color: var(--green);
    color: var(--white);
    transition: all 0.4s ease-in-out;
  }
`;
