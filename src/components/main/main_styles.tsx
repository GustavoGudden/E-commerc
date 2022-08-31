import styled from "styled-components";

export const Divprincipal = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const Div = styled.div`
  width: 100%;
  height: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-size: 30px;

  &.row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    color: #686eff;
  }
  &.row > h2 {
    color: #76778a;
    text-decoration: line-through;
  }

  &.divimg {
    width: 70%;
    height: 70%;
  }

  &.divimg > img {
    width: 100%;
  }

  &.produto {
    border: 1px solid #2e2e3a;
    width: 100%;
    height: 400px;
  }
`;

export const DivCartaz = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`;
