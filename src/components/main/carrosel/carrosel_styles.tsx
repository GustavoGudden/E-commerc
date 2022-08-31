import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);

  &.item {
    display: flex;
    justify-content: center;
    flex-direction: column;

    font-size: 30px;
  }
  > h2 {
    margin: 1rem;
    color: white;
  }

  > p {
    margin: 1rem;
    color: #686eff;
  }
`;

export const Titulo = styled.h1`
  font-size: 30px;
  color: #686eff;
  text-align: center;
`;
